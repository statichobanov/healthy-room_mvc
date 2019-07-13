function partnership (req, res) {
    res.render('partnership', {layout: false});
}

function postNewMember (req, res) {

}

module.exports = {
    partnership: partnership,
    postNewMember: postNewMember
}