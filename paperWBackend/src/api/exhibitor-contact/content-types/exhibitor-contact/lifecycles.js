

module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            console.log("Email sending from...");
            console.log(result.exhibitorEmail);

            
            await strapi.plugins['email'].services.email.send({
                // to: '54321vivi@gamil.com',
                to: 'a.estrada@apw.enterprises',
                from: 'a.estrada@apw.enterprises',
                replyTo: result.exhibitorEmail,
                subject: result.subject + result.company,
                text: result.name + " de " + result.company + " dice: " + result.message + " " + result.exhibitorEmail,
            });

        } catch (err) {
            console.error(err);
            console.log("Email not sent");
            console.log(JSON.stringify(err, null, 2));
        }
    }
};
