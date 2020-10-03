module.exports = {
    getModules: (req, res) => {
        const db = req.app.get('db')
        let class_id = req.params.id
        class_id = +class_id
        db.get_modules_by_class({class_id}).then(moduleData => res.status(200).send(moduleData))
        .catch(err => console.log(`${err}`))
    }
}