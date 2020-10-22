module.exports = {
    getClasses: (req, res) => {
        const db = req.app.get('db')
        db.get_all_classes().then(classes => res.status(200).send(classes))
        .catch(err =>console.log(`There was an error fetching those classes: ${err}`))
    },

    createClasses: (req, res) => {
        const db = req.app.get('db')
        const {name} = req.body
        db.create_new_class({name}).then(classes => res.status(200).send(classes))
        .catch(err => console.log(`There was an error creating that class: ${err}`))
    },

}