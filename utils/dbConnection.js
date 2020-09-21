const mongoose = require('mongoose');

const mongoConnect = () => {
    mongoose.connect('mongodb+srv://phil:delong@feedapi.1q4s7.gcp.mongodb.net/apipractice2?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
        .then(result => {
            console.log("DB Connected");
        })
        .catch(err => {
            console.log(err);
            throw err;
        }
    );
};

exports.mongoConnect = mongoConnect;