

module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.google.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME', 'apw373613@gmail.com'),
            pass: env('SMTP_PASSWORD', 'apwAdmin10'),
          },
          secure: false,
        },
        settings: {
          defaultFrom: 'apw373613@gmail.com',
          defaultReplyTo: 'apw373613@gmail.com',
        },
      },
    },
  });