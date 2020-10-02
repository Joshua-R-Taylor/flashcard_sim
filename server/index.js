const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()

// Controllers ===================================================
const ClassController = require('./controllers/ClassController')
// ===============================================================

const {CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance=> {
    app.set('db', dbInstance)
    console.log(`Connected to DB`)
    app.listen(SERVER_PORT, ()=> console.log(`Server is running on port ${SERVER_PORT}`))
})


// Endpoints: 

// get classes
app.get('/classes', ClassController.getClasses)
// get modules for a class
// get questions for a module
// get answers for a question

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