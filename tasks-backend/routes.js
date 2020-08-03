module.exports = app => {
    app.post('/signup', app.api.auth.signup)
    app.post('/signin', app.api.auth.signin)

    app.route('/tasks')
        .all(app.api.passport.authenticate())
        .get(app.api.task.getItems)
        .post(app.api.task.saveItem)

    app.route('/tasks/:id')
        .all(app.api.passport.authenticate())
        .delete(app.api.task.removeItem)

    app.route('/tasks/:id/toggle')
        .all(app.api.passport.authenticate())
        .put(app.api.task.toggleTask)
}