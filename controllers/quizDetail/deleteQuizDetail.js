const quizDetailModel = require('../../models/quizDetailSchema');

const deleteRoute= async(req,res)=>{
    const {id}= req.params;
    try {
        //delete a quiz
        const deltedObj=await quizDetailModel.findByIdAndDelete(id);
        if(deltedObj){
            return res.status(200).json({"success":"Quiz deleted successfully!"});
        }
        res.status(200).json({"Error":"No quiz found on this ID!"})
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = deleteRoute;