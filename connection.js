//connecting to database
require('dotenv').config();
const mongoose = require('mongoose');
const url= process.env.URI;

//connect
const db = async()=>{
    await mongoose.connect(url);
    console.log('Connection is sucessful!');
}

module.exports =db;