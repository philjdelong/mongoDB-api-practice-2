const mongoose = require('mongoose');

const mongoConnect = callback => {
    mongoose.connect('mongodb+srv://phil:delong@feedapi.1q4s7.gcp.mongodb.net/apipractice2?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
        .then(client => {
            console.log("DB Connected");
        })
        .catch(err => {
            console.log(err);
            throw err;
        }
    );
};

const getDB = () => {
    if(_db) {
        return _db;
    } else {
        throw "DB not connected";
    };
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;