module.exports = {
    getQuestions: (req, res) => {
        const db = req.app.get('db')
        let module_id = req.params.id
        module_id = +module_id
        db.get_questions_by_module({module_id}).then(questionData => res.status(200).send(questionData))
        .catch(err => console.log(`${err}`))
    }
}