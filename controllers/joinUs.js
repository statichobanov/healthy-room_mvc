const resoursec = require('../utils/resources');
const mailer = require('../services/nodemailer');

module.exports = (req, res) => {
    const name = req.body.firstName;
    const email = req.body.email;

    if (!email || !name) {
        res.send({error: "Can't submit empty field"});
    }

    const mailOptions = {
        from: resoursec.nodeMailerFrom,
        to: email,
        subject: resoursec.nodeMailerSubject,
        text: resoursec.nodeMailerMessageText
    };

    mailer.mailgun.messages().send(mailOptions, (error, body) => {
        if (error) {
            res.send({
                error:error 
            });
        } else {
            res.send({
                success: true,
                message: resources.nodeMailerSucessMsg
            });
        }
    });
}