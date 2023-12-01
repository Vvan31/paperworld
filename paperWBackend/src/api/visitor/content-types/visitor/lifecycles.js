module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            console.log("Email sending...");
            console.log(result.email);
            await strapi.plugins['email'].services.email.send({
              to: 'v31.osorio@gmail.com',
              from: 'a.estrada@apw.enterprises', 
              cc: 'a.estrada@apw.enterprises',
              replyTo: 'a.estrada@apw.enterprises',
              subject: 'The Strapi Email plugin worked successfully',
              text: 'Hello world! ' + result.email, 
              html: 'Hello world!', 
            })
        } catch(err) {
            console.log(err);
            console.log("Email not sent");
            console.log(JSON.stringify(err, null, 2));
        }
    }
}