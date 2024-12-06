const quizModel = require('../../models/Quiz');

const deleteRoute= async(req,res)=>{
    try {
        //delete a question
        const deltedObj=await quizModel.deleteMany({});
        if(deltedObj.deletedCount!=0){
            return res.status(200).json({"success":"Questions deleted successfully!"});
        }
        res.status(200).json({"Error":"No questions left to delete!"})
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = deleteRoute;