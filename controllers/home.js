const database = require('../config/database');

module.exports = (req, res) => {
    const db = database.getDb();

    db.db().collection('emails').find({}).toArray((err, subscribers) => {
        if (err) { console.log(err) };

        res.render('home',{
            subscribers: subscribers
        });
    });
}