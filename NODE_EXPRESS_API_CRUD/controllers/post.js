let Post = require('../models/database')

exports.getPosts = (req, res) => {
    const posts = Post.find().select("firstname lastname age")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err => console.log(err))
}
exports.userPost = (req, res) => {
    const post = new Post(req.body)
    post.save().then(result=>{
        res.status(200).json({
            post: result
        })
    }) 
}

exports.userId=(req,res) =>{
    const {_id} = req.params
    const founduser = Post.find((Post) => Post.id === _id)
    res.send(founduser)
}






