const session = require('express-session');
const Post = require('../models/post');
const User = require('../models/user');

exports.userCreate = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.save();
    res.redirect("/user/dashboard")
};

exports.userDashboard = (req, res, next) => {
    const email = req.body.email
    User.find({email})
        .then(result => {
            res
                .status(200)
                .json(result[0])
        })
}