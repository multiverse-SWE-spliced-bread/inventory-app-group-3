const express = require("express")
const usersRouter = express.Router()
const { User, Item } = require('../models')

usersRouter.get('/', async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
})

usersRouter.get('/:id', async (req, res) => {
    const oneUser = await User.findByPk(req.params.id)
    res.send(oneUser)
})

module.exports = usersRouter