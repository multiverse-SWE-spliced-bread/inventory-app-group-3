import itemsRouter from './Routes'

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.use('/items', itemsRouter)

app.get('/', (req, res) => {
    res.sendStatus(200);
})


module.exports = app