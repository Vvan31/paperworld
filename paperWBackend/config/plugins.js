

module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('SENDGRID_FROM', 'a.estrada@apw.enterprises'),
          defaultReplyTo: env('SENDGRID_FROM', 'a.estrada@apw.enterprises'),
        },
      },
    },
  });