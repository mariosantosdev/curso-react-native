const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
    },
    doneAt: {
        type: Date,
    },
    userId: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("Tasks", TaskModel)