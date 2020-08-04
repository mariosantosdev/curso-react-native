const moment = require('moment')
const Task = require('../model/Task')

module.exports = app => {
    const getItems = (req, res) => {
        const date = req.query.date ? { "$lte": moment(req.query.date).endOf('day').toDate() } : { "$lte": moment().endOf('day').toDate() }

        Task.find({ userId: req.user.id })
            .find({ createdAt: date })
            .then(tasks => res.json(tasks))
            .catch(err => res.status(500).json(err))
    }

    const saveItem = async (req, res) => {
        if (!req.body.desc.trim()) return res.status(400).send('Dê um nome para a tarefa')

        req.body.userId = req.user.id
        req.body.doneAt = null

        await new Task(req.body).save()
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const removeItem = (req, res) => {
        Task.findOne({ userId: req.user.id })
            .remove({ _id: req.params.id })
            .then(rowsDeleted => {
                if (rowsDeleted.deletedCount > 0) {
                    res.status(204).send()
                } else {
                    res.status(400).send(`Não foi encontrado nenhuma task`)
                }
            })
            .catch(err => res.status(400).json(err))

    }

    const toggleTask = (req, res) => {
        Task.findOne({ userId: req.user.id, _id: req.params.id })
            .then(task => {
                if (!task) return res.status(400).send('Task não encontrada')

                if (task.doneAt === null) {
                    task.update({ doneAt: new Date() })
                        .then(_ => res.status(204).send())
                        .catch(err => res.status(400).json(err))
                } else {
                    task.update({ doneAt: null })
                        .then(_ => res.status(204).send())
                        .catch(err => res.status(400).json(err))
                }
            })
            .catch(err => res.status(400).json(err))
    }

    return {
        getItems,
        saveItem,
        removeItem,
        toggleTask
    }
}