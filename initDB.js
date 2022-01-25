const mongoose = require('mongoose');


//mongoose connection
function connectToMongo() {
    mongoose.connect('mongodb://root:rgcsmdbpassword@localhost:27017/admin', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(res => {
            console.log('mongo connected successfully ')
        })

        .catch(err => {
            console.log('error', err);
        });
}

module.exports = {
    connectToMongo,
    mongoose};