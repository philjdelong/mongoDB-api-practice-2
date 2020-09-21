const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
    Post.find()
        .then(posts => {
            res.status(200).json({
                message: "Welcome to Feed!",
                data: posts
            })
        });
};

exports.getOne = (req, res, next) => {
    const postId = req.headers
    Post.findById(postId)
        .then(post => {
            res.status(201).json({
                post
            })
        })
}

exports.newPost = (req, res, next) => {
    const post = new Post({
        title: req.headers.title,
        content: req.headers.content,
        imageURL: req.headers.imageURL || null
    });
    post.save();
    res.redirect("/");
};