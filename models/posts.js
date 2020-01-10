const mongoose = require('mongoose');
const express=require('express');

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    postBy: {
        type: String
    },
    subHead: {
        type: String,
    },
    caption: {
        type: String,
    },
    authorPic: {
        type: String
    },
    loveCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true});

module.exports = mongoose.model('Post', postSchema);

