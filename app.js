const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

//Import Routes
const hortaRoutes = require('./routes/hortaRoutes');

//Middlewares
app.use('/horta', hortaRoutes);

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION,
{
    useUnifiedTopology: true,
    useNewUrlParser:true
}, 
() => {
    console.log('Connected to mongoDB');    
});

//Ouvindo na porta 3000
app.listen(3000);