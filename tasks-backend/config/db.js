const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://127.0.0.1:27017/tasks', { useNewUrlParser: true, useUnifiedTopology: true })
module.exports = mongoose