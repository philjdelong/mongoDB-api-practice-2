const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    }
});

module.exports = mongoose.model('posts', postSchema);
// const getDB = require('../utils/dbConnection').getDB
// const mongoDB = require('mongodb');
// const { post } = require('../routes/feed');


// class Post {
//     constructor(title, content, imageURL) {
//         this.title = title,
//         this.content = content,
//         this.imageURL = imageURL
//     }

//     save() {
//         const getDB = getDB();
//         db.collection('posts').insertOne(this).then().catch(err => {
//             console.log(err);
//         })
//     }
// }

// module.exports = mongoDB('post', post)
