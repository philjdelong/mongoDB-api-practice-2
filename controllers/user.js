const session = require('express-session');
const Post = require('../models/post');
const User = require('../models/user');

exports.userCreate = (req, res, next) => {
    const user = new User({
        username: req.headers.username,
        email: req.headers.email,
        password: req.headers.password
    });
    user.save();
    console.log(user);
    res.redirect("/")
};

exports.userDashboard = (req, res, next) => {
    const userId = '5f6cbe5b0d26e5c91313a476';
    Post.find({userId})
        .then(post => {
            res.status(201).json({
                "posts": post
            })
        })
}