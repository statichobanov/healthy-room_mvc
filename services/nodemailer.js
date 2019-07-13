require('dotenv').config();

const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILER_API_KEY,
    domain: process.env.MAILER_DOMAIN
});

module.exports = {
    mailgun: mailgun
}

