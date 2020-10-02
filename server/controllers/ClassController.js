module.exports = {
    getClasses: (req, res) => {
        const db = req.app.get('db')
        db.get_all_classes().then(classes => res.status(200).send(classes))
        .catch(err =>console.log(`${err}`))
    }
}