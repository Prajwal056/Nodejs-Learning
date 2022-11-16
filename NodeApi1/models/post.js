const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true //"Title is required",
        // minlength:4,
        // maxLength:150
    },
    body:{
        type: String,
        required: true //"Body is required",
        // minlength:4,
        // maxLength:150
    }
})

module.exports = mongoose.model("Post",postSchema)