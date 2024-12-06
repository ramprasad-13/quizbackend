const quizModel = require('../../models/Quiz');

const deleteRoute= async(req,res)=>{
    const {id}= req.params;
    try {
        //delete a question
        const deltedObj=await quizModel.findByIdAndDelete(id);
        if(deltedObj){
            return res.status(200).json({"success":"Question deleted successfully!"});
        }
        res.status(200).json({"Error":"No question find on this ID!"})
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = deleteRoute;