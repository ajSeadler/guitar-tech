// functions/subscribe.js
require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const { name, email } = JSON.parse(event.body);

    // Configure Nodemailer with band email service credentials from environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation Email',
      text: `Hello ${name},\n\nThank you for subscribing to our mailing list!`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscription successful! Confirmation email sent.' }),
    };
  } catch (error) {
    console.error('Error subscribing to the mailing list:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
