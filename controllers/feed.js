const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        message: "Welcome to Feed!",
        data: {} // fetch all posts here
    });
};

exports.newPost = (req, res, next) => {
    const post = new Post({
        title: req.headers.title,
        content: req.headers.content,
        imageURL: req.headers.imageURL || null
    });
    post
        .save()
        .then(result => {
            res.status(201).json({
                message: "Post Successful",
                data: result
            });
        });
};

