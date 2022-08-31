const express = require('express')
const app = express()

app.get('/', (res, req) => {
    res.sendStatus(200);
})


module.exports = app