
const {Router} = require('express')
const {home,getPosts,userPost,userId,userDelete,userPatch} = require('../controllers/post2')
// const {getPosts,userPost} = require('../controllers/post')

const app = Router()
app.get('/',home)
app.get('/user',getPosts)
app.get('/:id',userId)
app.post('/user',userPost) 
app.delete('/:id',userDelete)
app.patch('/:id',userPatch)

module.exports = app