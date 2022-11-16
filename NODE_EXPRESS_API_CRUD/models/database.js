
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: 'firstname is req', 
        minlength:4,
        maxLength:150
    },
    lastname:{
        type: String,
        required: 'lastname is req', 
        minlength:4,
        maxLength:150 
    },
    age:{
        type: Number,
        required: 'age is req', 
        minlength:1,
        maxLength:15 
    }
})

module.exports = mongoose.model("Post",postSchema)