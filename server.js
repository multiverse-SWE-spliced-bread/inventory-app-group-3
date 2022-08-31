const express = require('express');
const app = require('./server/app');
const db = require('./server/db')
// const port = 3001;
const PORT = process.env.PORT || 3001;

// app.listen(()=>{
//     console.log(`App listening on port ${port}`)
// })

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();

//Cuerrently getting a 500 server internal error, trying to sync the servers