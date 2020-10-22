const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()

// Controllers ===================================================
const ClassController = require('./controllers/ClassController')
const ModuleController = require('./controllers/ModuleController')
const CardController = require('./controllers/CardController')
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
app.get('/cards/:type/:id', CardController.getCards)

// post class
app.post('/classes', ClassController.createClasses)
// post module for a class
app.post('/modules/:id', ModuleController.createModules)
// post cards for a module
app.post('/cards/:id', CardController.createCard)

// put class
app.put('/classes/:id')
// put module for a class
app.put('/module/:id')
// put questions for a module
app.put('/questions/:id')
// put answers for a question
app.put('/answers/:id')

// delete class
app.delete('/classes/:id')
// delete module for a class
app.delete('/module/:id')
// delete questions for a module
app.delete('/questions/:id')
// delete answers for a question
app.delete('/answers/:id')