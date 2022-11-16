const { v4: uuidv4 } = require('uuid');

const { post } = require("../routes/users")

let users = []

exports.home =(req,res) => {   
    res.send('Welocme home')
}

exports.getPosts =(req,res) => {
    console.log(users)
    res.send(users)
}

exports.userPost =(req,res) => {
    console.log('Routes reached from postman',)
    const user = req.body 
    // For creating unique id
    const userwithId = {...user, id:uuidv4()}
    users.push(userwithId) // sending the data to users
    // send to msg to postman
    res.send(`user with the name ${user.firstname} added to the database`)
}

exports.userId=(req,res) =>{
    const {id} = req.params
    const founduser = users.find((user) => user.id === id)
    res.send(founduser)
}

exports.userDelete=(req,res)=>{
    const {id} = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`user with ${id} deleted from database`)
}

exports.userPatch=(req,res)=>{
    const {id} = req.params
    const user = users.find((user)=>user.id === id)
    const {firstname,lastname,age} = req.body
    
    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;
    console.log(`user with ${id} has been updated`)
    res.send(`user with ${id} has been updated`)
}
