const app = require('express')()
const bodyParse = require('body-parser')
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./routes.js')
    .into(app)

app.db = db

app.use(bodyParse.json())

app.listen('3000', (err) => {
    console.clear()
    if (err) return

    console.log('[backend] -> start done')
})