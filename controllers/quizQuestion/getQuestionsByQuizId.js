const quizModel = require('../../models/Quiz');

const { ObjectId } = require('mongoose').Types; // If you're using Mongoose


const getRoute = async (req, res) => {
    const { id } = req.params;
    const { page = 1, limit = 5 } = req.query;  // Default to page 1 and 5 questions per page if not provided.

    try {
        // Convert page and limit to integers.
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);

        // Get total count of questions for pagination (for calculating total pages).
        const totalQuestions = await quizModel.countDocuments({ quizId: id });

        // Calculate the number of questions to skip based on the current page.
        const skip = (pageNum - 1) * limitNum;

        // Get questions for the current page, limiting to 5 questions per page.
        const quizId= new ObjectId(id)
        const questions = await quizModel
            .find({ quizId })
            .skip(skip)
            .limit(limitNum);

        // Calculate total number of pages.
        const totalPages = Math.ceil(totalQuestions / limitNum);

        // Return the questions along with pagination info.
        res.status(200).json({
            quizWithQuestions: questions,
            pagination: {
                totalQuestions,
                totalPages,
                currentPage: pageNum,
                perPage: limitNum
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

module.exports = getRoute;