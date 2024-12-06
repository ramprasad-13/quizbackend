const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    quizId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    question:{
        type:String,
        required:true,
        unique:true
    },
    options:{
        type:[String],
        required:true
    },
    answer:{
        type:Number,
        enum:[0,1,2,3],
        required:true
    },
    explanation:{
        type:"String",
        required:true
    }
})

const quizModel = mongoose.model('Quiz',QuizSchema);
module.exports = quizModel;