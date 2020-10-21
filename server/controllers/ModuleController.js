module.exports = {
    getModules: (req, res) => {
        const db = req.app.get('db')
        let class_id = req.params.id
        class_id = +class_id
        db.get_modules_by_class({class_id}).then(moduleData => res.status(200).send(moduleData))
        .catch(err => console.log(`There was an error fetching the module: ${err}`))
    },

    createModules: (req, res) => {
        const db = req.app.get('db')
        let {title} = req.body
        let id = req.params.id
        id = +id
        db.create_new_module({title, id}).then(modules => res.status(200).send(modules))
        .catch(err => console.log(`There was an error creating that module: ${err}`))
    }
}