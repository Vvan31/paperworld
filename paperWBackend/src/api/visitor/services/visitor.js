'use strict';

const { createCoreService } = require('@strapi/strapi').factories;
const nodemailer = require('nodemailer');

module.exports = createCoreService('api::visitor.visitor', {
  lifecycles: {
    async afterCreate(data) {
      const { email, ...rest } = data;

      // Send an email to the new visitor
      await sendEmail(email, 'Welcome to the Exhibition', 'Thank you for registering!', rest);
    },
  },
});

async function sendEmail(to, subject, text, data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: process.env.SMTP_USERNAME, // Or use a default 'from' address
    to,
    subject,
    text,
    // You can include additional data in the email body if needed
    html: `<p>Additional information: ${JSON.stringify(data)}</p>`,
  };

  try {
    await transporter.sendMail(message);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
