const Post = require('../models/post');
const User = require('../models/user');

exports.userCreate = (req, res, next) => {
    const user = new User({
        firstName: req.headers.firstname,
        lastName: req.headers.lastname,
        email: req.headers.email,
        posts: []
    });
    user.save();
    console.log(user);
    res.redirect("/")
};

exports.userDashboard = (req, res, next) => {
    // const userId = req.headers._id
    const userId = '5f6a4493ea3ac66fde67b5a0';
    //     .then(user => {
    //         res.status(201).json({
    //             user
    //         });
    //     });
    Post.find({userId})
        // .populate('userId')
        .then(post => {
            res.status(201).json({
                "posts": post
            })
        })
}