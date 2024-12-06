const quizModel = require('../../models/Quiz');

const getRoute= async(req,res)=>{
    try {
        //get all questions
        const questions= await quizModel.find()
        res.status(200).json({questions:questions});
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = getRoute;