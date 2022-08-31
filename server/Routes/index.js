const express = require('express');
const router = express.Router();

//Model routers
router.use('/items', require('./items'))


module.exports = router