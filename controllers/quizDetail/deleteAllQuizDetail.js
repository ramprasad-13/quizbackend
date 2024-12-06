const quizDetailModel = require('../../models/quizDetailSchema');

const deleteRoute= async(req,res)=>{
    try {
        //delete all quizes
        const deltedObj=await quizDetailModel.deleteMany({});
        if(deltedObj.deletedCount!=0){
            return res.status(200).json({"success":"All Quizes deleted successfully!"});
        }
        res.status(200).json({"Error":"No quizes left to delete!"})
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = deleteRoute;