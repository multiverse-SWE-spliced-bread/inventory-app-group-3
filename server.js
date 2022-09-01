const express = require('express');
const app = express()
const seed = require('./server/seed')
const { itemsRouter, usersRouter } = require('./server/Routes')
// const port = 3001;
const PORT = process.env.PORT || 3000;

app.use('/items', itemsRouter)

// app.listen(()=>{
//     console.log(`App listening on port ${port}`)
// })

const init = async () => {
  try {
    await seed();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();

//Cuerrently getting a 500 server internal error, trying to sync the servers