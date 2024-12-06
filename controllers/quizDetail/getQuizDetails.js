const quizDetailModel = require('../../models/quizDetailSchema');

const getRoute= async(req,res)=>{
    try {
        //get all questions
        const quizes= await quizDetailModel.find()
        res.status(200).json({quizes:quizes});
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = getRoute;