

function isGuest (req, res, next) {
    if (req.user==undefined) {
        next();
    }else {
        res.render('home')
    }
}

function isUser( req, res, next) {
    if(req.user) {
        next();
    }else {
        res.render('login')
    }
}

module.exports= {
    isGuest,
    isUser,
}