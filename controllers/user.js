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
    const userId = '5f6cc2296d7ce5cc6c495b7a';
    Post.find({userId})
        .then(post => {
            res.status(201).json({
                "posts": post
            })
        })
}