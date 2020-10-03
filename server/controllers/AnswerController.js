module.exports = {
    getAnswers: (req, res) => {
        const db = req.app.get('db')
        let question_id = req.params.id
        question_id = +question_id
        db.get_answers_by_question({question_id}).then(answerData => res.status(200).send(answerData))
        .catch(err => console.log(`${err}`))
    }
}