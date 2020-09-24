const Post = require('../models/post')
const User = require('../models/user')

exports.postIndex = (req, res, next) => {
    Post.find()
        .then(posts => {
            res.status(200).json({
                message: "Welcome to Feed!",
                log: console.log(posts.length + " total posts"),
                data: posts
            })
        });
};

exports.postCreate = (req, res, next) => {
    const post = new Post({
        title: req.headers.title,
        content: req.headers.content,
        imageURL: req.headers.imageURL || null,
        // need sessions and pass currentUser
        userId: req.headers.userId || '5f6cbe5b0d26e5c91313a476'
    });
    post.save();
    console.log(post)
    console.log(User.findById(post.userId))
    res.redirect("/");
};

exports.postShow = (req, res, next) => {
    const postId = req.headers._id
    Post.findById(postId)
        .populate('userId')
        .then(post => {
            res.status(201).json({
                post
            })
            console.log(post)
        })
}

exports.postUpdate = (req, res, next) => {
    const postId = req.headers._id
    Post.findById(postId)
        .then(post => {
            post.title = req.headers.title;
            post.content = req.headers.content;
            post.save()
        });
    res.redirect("/")
};

exports.postDelete = (req, res, next) => {
    const postId = req.headers._id
    Post.findByIdAndDelete(postId)
        .then(post => {
            console.log(post)
        })
    res.redirect("/")
}