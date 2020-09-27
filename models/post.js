const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            required: false,
            default: ''
        },
        author: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
        ]     
    }, 
    { timestamps: true },
    { collection: 'posts' }
);

module.exports = mongoose.model('Post', PostSchema);