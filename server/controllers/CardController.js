module.exports = {
    getQuestions: (req, res) => {
        const db = req.app.get('db')
        let module_id = req.params.id
        module_id = +module_id
        db.get_questions_by_module({module_id}).then(questionData => res.status(200).send(questionData))
        .catch(err => console.log(`There was an error fetching the questions: ${err}`))
    },
    getAnswers: (req, res) => {
        const db = req.app.get('db')
        let question_id = req.params.id
        question_id = +question_id
        db.get_answers_by_question({question_id}).then(answerData => res.status(200).send(answerData))
        .catch(err => console.log(`There was an error fetching the answers: ${err}`))
    },
    createCard: async (req, res) => {
        const db = req.app.get('db')
        let module_id = req.params.id
        module_id = +module_id
        let {question, answer} = req.body
        let question_id;
        await db.create_new_question({question, module_id}).then(questionData => {
            res.status(200).send()
            question_id = questionData[0].id
        }).catch(err => console.log(`There was an error creating that question: ${err}`))
        await db.create_new_answer({answer, question_id}).then(answerData => res.status(200).send())
        .catch(err => console.log(`There was an error creating that answer: ${err}`))
    }
}