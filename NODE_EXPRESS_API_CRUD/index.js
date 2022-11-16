
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const expressValidator = require('express-validator')
// load env variables
const dotenv = require('dotenv');
dotenv.config()
// import mongoose
// const mongoose = require('mongoose');

//---------------------------------------------------------
//db connection

// mongoose.connect(
//     process.env.MONGO_URI,
//     {useNewUrlParser: true}
//   )
//   .then(() => console.log('DB Connected'))
   
//   mongoose.connection.on('error', err => {
//     console.log(`DB connection error: ${err.message}`)
//   });

//------------------------------------------------------------

const app = express()

//middleware
app.use(bodyParser.json())
app.use('/',usersRoutes)
app.use(expressValidator())

//listening
const port = process.env.port || 3000 
app.listen(port,()=>console.log(`server running on port http://localhost:${port}`))
