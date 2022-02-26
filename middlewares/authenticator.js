const authenticator = (req, res, next) => {
    const {username, password} = req.headers;
    if(username === process.env['ADMIN_USERNAME'] && password === process.env['ADMIN_PASSWORD']){
        req.body.isAuthenticated = true
        next();
    }
    else {
        req.body.isAuthenticated = false;
        res.status(503).send({'message': 'unauthenticated'})
    }


}

module.exports = authenticator;
