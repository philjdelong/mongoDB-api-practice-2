// const session = require('express-session');
const User = require('../models/user');

exports.userLogin = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    User.find({email})
        .then(result => {
            if(password == result[0].password) {
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