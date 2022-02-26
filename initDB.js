const mongoose = require('mongoose');


//mongoose connection
//root:rgcsmdbpassword
function connectToMongo() {
    mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/admin', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        reconnectTries: 60,
        // wait 1 second before retrying
        reconnectInterval: 1000,

    })
        .then(res => {
            console.log('mongo connected successfully ')
        })
        .catch(err => {
            console.log('error', err);
            setTimeout(connectToMongo, 5000);
        });
}

module.exports = {
    connectToMongo,
    mongoose};
