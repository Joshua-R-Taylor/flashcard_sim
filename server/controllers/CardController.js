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
        db.create_new_card({module_id, question, answer}).then(cardData => res.status(200).send())
        .catch(err => console.log(`There was an error creating that card: ${err}`))
    },

    getCards: (req, res) => {
        const db = req.app.get('db')
        let {type, id} = req.params
        id = +id
        type === "class" ? 
        db.get_all_cards_by_class([id]).then(cards => res.status(200).send(cards))
        .catch(err => console.log(`There was an error getting the cards for that class: ${err}`))
        :
        db.get_all_cards_by_module([id]).then(cards => res.status(200).send(cards))
        .catch(err => console.log(`There was an error getting the cards for that module: ${err}`))
    }
}