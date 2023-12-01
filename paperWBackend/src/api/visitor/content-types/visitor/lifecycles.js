module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'v31.osorio@gmail.com',
              from: 'a.estrada@apw.enterprises', 
              cc: 'a.estrada@apw.enterprises',
              bcc: 'valid email address',
              replyTo: 'valid email address',
              subject: 'The Strapi Email plugin worked successfully',
              text: 'Hello world! ' + result.email, 
              html: 'Hello world!', 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}