const login = async (req,res) =>{
    const {username, password} = req.body;
    if(username === process.env['ADMIN_USERNAME'] && password === process.env['ADMIN_PASSWORD']){
        req.body.isAuthenticated = true
        res.send({message: 'authenticated'});
    }
    else {
        req.body.isAuthenticated = false;
        res.status(503).send({'message': 'unauthenticated'})
    }
};


module.exports = {
    login
}


