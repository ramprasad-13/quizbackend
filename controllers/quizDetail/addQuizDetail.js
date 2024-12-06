const quizDetailModel = require('../../models/quizDetailSchema');

const addRoute= async(req,res)=>{
    try {
        const{quizName,description,duration,assignedBy}= req.body;
        const existingQuiz = await quizDetailModel.findOne({quizName});
        if(existingQuiz){
            return res.status(400).json({"Error":"Duplicate quizes are not allowed"});
        }
        const Quiz= new quizDetailModel(
            {
                quizName,
                description,
                duration,
                assignedBy
            }
        )
        const savedQuiz= await Quiz.save()
        res.status(201).send(savedQuiz)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = addRoute;