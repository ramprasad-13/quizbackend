const quizModel = require('../../models/Quiz');

const getRoute= async(req,res)=>{
    const {id}= req.params;
    try {
        //get a question
        const question= await quizModel.findById(id);
        if(!question){
            return res.status(404).json({Error:"No Question found on this ID!"})
        }
        res.status(200).json({question:question});
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = getRoute;