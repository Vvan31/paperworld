module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'a.estrada@apw.enterprises',
                subject: 'Thank you for registering to Americas Paper World',
                text: 'Welcome: ' +JSON.stringify(result),
            });
        } catch (error) {
            console.log(error);
        }
    }
}