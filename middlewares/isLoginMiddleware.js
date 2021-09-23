function isLoginMiddleware(req, res, next){
    if(req.session.isLogin){
        res.redirect('/products')
    } else {
        res.redirect('/login')
    }
}

module.exports = isLoginMiddleware