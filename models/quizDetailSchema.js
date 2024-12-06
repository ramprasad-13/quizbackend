const mongoose = require('mongoose');

// Define the QuizDetails schema
const QuizDetailsSchema = new mongoose.Schema({
    quizName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,  // Duration in minutes
        required: true
    },
    assignedBy: {
        type: String,  // Assuming this is the name of the person who assigned the quiz
        required: true
    }
});

// Create the QuizDetails model
const QuizDetails = mongoose.model('QuizDetails', QuizDetailsSchema);
module.exports = QuizDetails;
