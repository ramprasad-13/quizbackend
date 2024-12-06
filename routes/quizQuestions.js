const router = require('express').Router()

// //get a question
// const getQuestion = require('../controllers/quizQuestion/getAQuestion');
// router.get('/get/:id',getQuestion);

//get all questions
const getQuestions = require('../controllers/quizQuestion/get');
router.get('/get', getQuestions);

//add a question
const addQuestion = require('../controllers/quizQuestion/add');
router.post('/add', addQuestion);

//update a question
const updateQuestion = require('../controllers/quizQuestion/update');
router.put('/update/:id', updateQuestion);

//delete a question
const deleteAQuestion = require('../controllers/quizQuestion/delete');
router.delete('/delete/:id', deleteAQuestion);

//delete all questions
const deleteAllQuestions = require('../controllers/quizQuestion/deleteAll');
router.delete('/delete', deleteAllQuestions);

//get all questions by quiz Id
const getQuestionsByQuizId = require('../controllers/quizQuestion/getQuestionsByQuizId');
router.get('/get/:id', getQuestionsByQuizId);

module.exports =router;