const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            bcrypt: true,
            type: String
        },
        posts: [
            {
                post: { 
                    ref: 'Post',
                    required: true,
                    type: Schema.Types.ObjectId
                }
            }
        ],
    },
    { timestamps: true },
    { collection: 'users' }
);

module.exports = mongoose.model('User', UserSchema);