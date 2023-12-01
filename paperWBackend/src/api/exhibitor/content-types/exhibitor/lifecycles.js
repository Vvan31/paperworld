const fs = require('fs').promises;
const path = require('path');
const qr = require('qr-image');

module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            console.log("Email sending to...");
            console.log(result.email);

            const qrData = {
                id: result.slug,
                company: result.company,
                spot: result.spot.name,
                email: result.email,
                country: result.countryexhibitor,
                name: result.name,
                rfc: result.rfc,
            };

            const qrCode = qr.image(JSON.stringify(qrData), { type: 'png' });
            const qrCodeFilePath = `./public/uploads/${result.id}-qrcode.png`;

            // Save QR code image to file
            await fs.writeFile(qrCodeFilePath, qrCode.pipe(new (require('stream').PassThrough)()));

            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'a.estrada@apw.enterprises',
                cc: 'a.estrada@apw.enterprises',
                replyTo: 'a.estrada@apw.enterprises',
                subject: 'Welcome to Americas Paper World',
                templateId: process.env.SENDGRID_EXHIBITOR_TEMPLATE_ID,
                attachments: [
                    {
                        content: await fs.readFile(qrCodeFilePath, 'base64'),
                        filename: `${result.id}-qrcode.png`,
                        type: 'image/png',
                        disposition: 'attachment',
                    },
                ],
                dynamicTemplateData: {
                    name: result.company,
                    spot: result.spot.name,
                },
            });

            // Remove the temporary QR code image file
            await fs.unlink(qrCodeFilePath);

        } catch (err) {
            console.error(err);
            console.log("Email not sent");
            console.log(JSON.stringify(err, null, 2));
        }
    }
};
