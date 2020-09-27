const Post = require('../models/post')
const User = require('../models/user')

exports.postIndex = (req, res, next) => {
    Post.find()
        .then(result => {
            res.status(200).json({
                quantity: posts.length + " total posts",
                data: result
            })
        });
};

exports.postCreate = (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        imageURL: req.body.imageURL || null,
        // need sessions and pass currentUser
        author: req.body.author || '5f6d0a6f601936fec6614d7e'
    });
    post.save();
    console.log(post)
    res.redirect("/");
};

exports.postShow = (req, res, next) => {
    const postId = req.body._id
    Post.findById(postId)
        .populate('author')
        .then(result => {
            res.status(201).json({
                result
            })
            console.log(result)
        })
}

exports.postUpdate = (req, res, next) => {
    const postId = req.body._id
    Post.findById(postId)
        .then(result => {
            result.title = req.body.title;
            result.content = req.body.content;
            result.save()
        });
    res.redirect("/")
};

exports.postDelete = (req, res, next) => {
    const postId = req.body._id
    Post.findByIdAndDelete(postId)
        .then(result => {
            console.log(result)
        })
    res.redirect("/")
}