const express = require("express")
const router = express.Router()
const { User, Item } = require('../models')

router.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
})

router.get('/:id', async (req, res) => {
    const oneUser = await User.findByPk(req.params.id)
    res.send(oneUser)
})

module.exports = router