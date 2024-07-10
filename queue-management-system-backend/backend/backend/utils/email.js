const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'your_email_provider',
    auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
    },
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'your_email@example.com',
        to,
        subject,
        text,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendEmail;
