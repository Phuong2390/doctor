module.exports = function (req,res) {
    console.log(req.session.id);
    let sessionStore = req.app.get('sessionStore');
    req.session.userId = 'ididi';
    sessionStore.set(req.session.id,req.session, function () {
        console.log('ok');
    })
};