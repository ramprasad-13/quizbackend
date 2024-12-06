const router = require('express').Router()

//get a quiz detail
const getQuizDetail = require('../controllers/quizDetail/getQuizDetail');
router.get('/get/:id',getQuizDetail);

//get all quizzes questions
const getQuizDetails = require('../controllers/quizDetail/getQuizDetails');
router.get('/get', getQuizDetails);

//add a question
const addQuizDetail = require('../controllers/quizDetail/addQuizDetail');
router.post('/add', addQuizDetail);

//update a question
const updateQuizDetail = require('../controllers/quizDetail/updateQuizDetail');
router.put('/update/:id', updateQuizDetail);

//delete a question
const deleteQuizDetail = require('../controllers/quizDetail/deleteQuizDetail');
router.delete('/delete/:id', deleteQuizDetail);

//delete all questions
const deleteAllQuizDetails = require('../controllers/quizDetail/deleteAllQuizDetail');
router.delete('/delete', deleteAllQuizDetails);

module.exports =router;