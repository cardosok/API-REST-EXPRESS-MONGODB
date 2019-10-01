const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors())
app.use(bodyParser.json());

//Import Routes
const postsRoutes = require('./routes/posts')


//Middlewares
app.use('/posts', postsRoutes);
//app.use('/user', user);

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION,
{
    useUnifiedTopology: true,
    useNewUrlParser:true
}, 
() => {
    console.log('Connected to mongoDB');    
});


//How to start listening a serve
app.listen(3000);