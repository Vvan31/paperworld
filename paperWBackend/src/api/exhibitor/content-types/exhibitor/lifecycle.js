
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
                spot: result.spot,
                email: result.email,
                country: result.countryexhibitor,
                name: result.name,
                rfc: result.rfc,
            }
            const qrCode = qr.image(JSON.stringify(qrData), { type: 'png' });
            const qrCodeBuffer = qrCode.pipe(require('fs').createWriteStream(`./public/uploads/${result.id}-qrcode.png`));

            await strapi.plugins['email'].services.email.send({
              to: result.email,
              from: 'a.estrada@apw.enterprises', 
              cc: 'a.estrada@apw.enterprises',
              replyTo: 'a.estrada@apw.enterprises',
              subject: 'The Strapi Email plugin worked successfully',
              templateId: process.env.SENDGRID_EXHIBITOR_TEMPLATE_ID,
              dynamicTemplateData: {
                name: result.name,
                spot: result.spot,
                qrCode: `./public/uploads/${result.id}-qrcode.png`,
              }
            })
        } catch(err) {
            console.log(err);
            console.log("Email not sent");
            console.log(JSON.stringify(err, null, 2));
        }
        /* 
          async sendRegistryEmail(exhibitor, data) {
            // Generate QR code
            const qrCode = qr.image(exhibitor.qrData, { type: 'png' });
            const qrCodeBuffer = qrCode.pipe(require('fs').createWriteStream(`./public/uploads/${exhibitor.id}-qrcode.png`));
        
            // Send email with QR code attached
            await strapi.plugins['email'].services.email.send({
              to: data.email,
              from: 'your@example.com',
              subject: 'Registry Confirmation',
              text: 'Thank you for your registry.',
              attachments: [
                {
                  filename: `${exhibitor.id}-qrcode.png`,
                  path: `./public/uploads/${exhibitor.id}-qrcode.png`,
                  encoding: 'base64',
                  type: 'image/png',
                  disposition: 'attachment',
                },
              ],
            });
          },
        };
         */
    }
}
