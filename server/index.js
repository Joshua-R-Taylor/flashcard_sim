const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()

// Controllers ===================================================
const ClassController = require('./controllers/ClassController')
const ModuleController = require('./controllers/ModuleController')
const QuestionController = require('./controllers/QuestionController')
const AnswerController = require('./controllers/AnswerController')
// ===============================================================

const {CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance=> {
    app.set('db', dbInstance)
    console.log(`Connected to DB`)
    app.listen(SERVER_PORT, ()=> console.log(`Server is running on port ${SERVER_PORT}`))
})


// Endpoints: 

// get requests
app.get('/classes', ClassController.getClasses)
app.get('/modules/:id', ModuleController.getModules)
app.get('./questions/:id', QuestionController.getQuestions)
app.get('./answers/:id', AnswerController.getAnswers)

// post class
// post module for a class
// post questions for a module
// post answers for a question

// put class
// put module for a class
// put questions for a module
// put answers for a question

// delete class
// delete module for a class
// delete questions for a module
// delete answers for a question