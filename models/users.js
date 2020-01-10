const express=require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email:{
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);