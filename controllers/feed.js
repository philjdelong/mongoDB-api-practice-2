const Post = require('../models/post')

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
        // need to learn sessions and pass currentUser
        userId: req.headers.userId || '5f693b6ed158425f5513931c'
    });
    post.save();
    console.log(post)
    res.redirect("/");
};

exports.postShow = (req, res, next) => {
    const postId = req.headers._id
    Post.findById(postId)
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