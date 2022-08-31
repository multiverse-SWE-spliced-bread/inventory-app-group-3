const express = require('express');
const app = require('./server/app');
const port = 3001;




app.listen(()=>{
    console.log(`App listening on port ${port}`)
})