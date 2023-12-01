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
              name: result.name,
              position: result.position,
              company: result.company,
              email: result.email,
          };

          const qrCode = qr.image(JSON.stringify(qrData), { type: 'png' });
          const qrCodeFilePath = `./public/uploads/${result.slug}-qrcode.png`;

          // Save QR code image to file
          await fs.writeFile(qrCodeFilePath, qrCode.pipe(new (require('stream').PassThrough)()));

            await strapi.plugins['email'].services.email.send({
              to: result.email,
              from: 'a.estrada@apw.enterprises', 
              cc: 'a.estrada@apw.enterprises',
              replyTo: 'a.estrada@apw.enterprises',
              subject: 'Welcome to Americas Paper World',
              /* text: 'Hello world! ' + result.email, 
              html: 'Hello world!',  */
              templateId: process.env.SENDGRID_VISITOR_TEMPLATE_ID,
              dynamicTemplateData: {
                name: result.name
              },
              attachments: [
                {
                    content: await fs.readFile(qrCodeFilePath, 'base64'),
                    filename: `${result.slug}-qrcode.png`,
                    type: 'image/png',
                    disposition: 'attachment',
                },
            ],
            });
            await fs.unlink(qrCodeFilePath);
        } catch(err) {
            console.log(err);
            console.log("Email not sent");
            console.log(JSON.stringify(err, null, 2));
        }
    }
}