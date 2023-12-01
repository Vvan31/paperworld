
const fs = require('fs').promises;
const path = require('path');
const qr = require('qr-image');

module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;
        
        try{
            console.log("Email sending to...");
            console.log(result.email);
            const qrData = {
                slug: result.slug,
                company: result.company,
                spot: result.spot.name,
                email: result.email,
                country: result.countryexhibitor,
                name: result.name,
                rfc: result.rfc,
            }
           
            const qrCode = qr.image(JSON.stringify(qrData), { type: 'png' });
            const qrCodeFilePath = `./public/uploads/${result.id}-qrcode.png`;

            // Save QR code image to file
            qrCode.pipe(fs.createWriteStream(qrCodeFilePath));

            // Read the saved QR code image as a buffer
            const qrCodeBuffer = await fs.readFile(qrCodeFilePath);

            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'a.estrada@apw.enterprises',
                cc: 'a.estrada@apw.enterprises',
                replyTo: 'a.estrada@apw.enterprises',
                subject: 'The Strapi Email plugin worked successfully',
                templateId: process.env.SENDGRID_EXHIBITOR_TEMPLATE_ID,
                dynamicTemplateData: {
                    name: result.company,
                    spot: result.spot.name,
                    qrCode: {
                        content: qrCodeBuffer.toString('base64'),
                        filename: `${result.id}-qrcode.png`,
                        type: 'image/png',
                        disposition: 'attachment',
                    },
                },
            });

            // Remove the temporary QR code image file
            await fs.unlink(qrCodeFilePath);

        } catch (err) {
            console.log(err);
            console.log("Email not sent");
            console.log(JSON.stringify(err, null, 2));
        }
    }
}


