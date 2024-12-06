const quizModel = require('../../models/Quiz');

const addRoute= async(req,res)=>{
    try {
        const{quizId,question,options,answer,explanation}= req.body;
        const existingQuestion = await quizModel.findOne({question});
        if(existingQuestion){
            return res.status(400).json({"Error":"Duplicate questions are not allowed"});
        }
        const Quest= new quizModel(
            {
                quizId,
                question,
                options,
                answer,
                explanation
            }
        )
        const savedQuest= await Quest.save()
        res.status(201).send(savedQuest)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = addRoute;