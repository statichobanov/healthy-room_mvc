const resources = require('../utils/resources');

module.exports = (req, res) => {
    res.render('plp',{
        layout: false
    });
}