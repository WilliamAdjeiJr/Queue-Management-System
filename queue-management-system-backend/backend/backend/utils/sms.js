const twilio = require('twilio');

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = new twilio(accountSid, authToken);

const sendSms = (to, body) => {
    client.messages.create({
        body,
        from: 'your_twilio_phone_number',
        to,
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error(err));
};

module.exports = sendSms;
