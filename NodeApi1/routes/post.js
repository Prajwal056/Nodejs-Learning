

const express = require("express")
const {getPosts,createPosts} = require("../contorllers/post");
const validator = require("../validator/app")

const router = express.Router()

router.get('/',getPosts)
router.post('/post',validator.createPostValidator, createPosts)

module.exports = router;
