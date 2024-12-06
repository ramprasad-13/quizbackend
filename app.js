const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const db = require('./connection');

const cors = require('cors');

//connect to db
db()

//middlewares
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors())

app.get('/',(req,res)=>{
    res.send('App is working!');
})

//questions route
const quizQuestions = require('./routes/quizQuestions')

//Quiz detail route
const quizDetail = require('./routes/quizDetails')

//add question
app.use('/api/question',quizQuestions)

//add quiz detail
app.use('/api/quiz',quizDetail)

app.listen(port,()=>{
    console.log(`Server started listening on port ${port}`)
})

module.exports = app;
