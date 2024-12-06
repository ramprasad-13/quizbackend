const quizDetailModel = require('../../models/quizDetailSchema');

const getRoute= async(req,res)=>{
    const {id}= req.params;
    try {
        //get a question
        const quiz= await quizDetailModel.findById(id);
        if(!quiz){
            return res.status(404).json({Error:"No Quiz found on this ID!"})
        }
        res.status(200).json({quiz:quiz});
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = getRoute;