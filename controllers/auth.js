// const session = require('express-session');
const User = require('../models/user');

exports.userLogin = (req, res, next) => {
    const email = req.headers.email
    const password = req.headers.password
    User.find({email})
        .then(user => {
            if(password == user[0].password) {
                res
                    .status(200)
                    .redirect('/user/dashboard');
            } else {
                res
                    .status(401)
                    .json({
                        data: "Login not successful, Please try again."
                    });
            }
        })
}