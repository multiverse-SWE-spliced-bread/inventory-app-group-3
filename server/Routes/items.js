const express = require("express")
const itemsRouter = express.Router()
const Item = require('../models/Item')

itemsRouter.get('/', async (req, res) => {
    console.log(req)
    const allItems = await Item.findAll()
    res.send(allItems)
})


itemsRouter.get('/:id', async (req, res) => {
    const oneItem = await Item.findByPk(req.params.id)
    res.send(oneItem)
})

/*
itemsRouter.get('/belowTen', async (req, res) => {

    const allItems = await Item.findAll(req.params.id)
    let belowTenItems = []
    for (item of allItems) {if (Item.price < 10) {
        belowTenItems.push(item)
    }}
    if (belowTenItems.length === 0) {
        return "sorry no products found :("
    }
    res.send(belowTenItems)
})

itemsRouter.get('/belowTwenty', async (req, res) => {

    const allItems = await Item.findAll(req.params.id)
    let belowTwentyItems = []
    for (item of allItems) {if (Item.price < 20) {
        belowTwentyItems.push(item)
    }}
    if (belowTwentyItems.length === 0) {
        return "sorry no products found :("
    }
    res.send(belowTwentyItems)
})

itemsRouter.get('/belowThirty', async (req, res) => {

    const allItems = await Item.findAll(req.params.id)
    let belowThirtyItems = []
    for (item of allItems) {if (Item.price < 30) {
        belowThirtyItems.push(item)
    }}
    if (belowThirtyItems.length === 0) {
        return "sorry no products found :("
    }
    res.send(belowThirtyItems)
})

itemsRouter.get('/belowFourty', async (req, res) => {

    const allItems = await Item.findAll(req.params.id)
    let belowFourtyItems = []
    for (item of allItems) {if (Item.price < 40) {
        belowFourtyItems.push(item)
    }}
    if (belowFourtyItems.length === 0) {
        return "sorry no products found :("
    }
    res.send(belowFourtyItems)
})

itemsRouter.get('/:category', async (req, res) => {
    const allItems = await Item.findAll( {
        where: {
            category: req.params.category
          }
    })
    res.send(allItems)
})


/*
itemsRouter.delete('/:id', async (req, res) => {
    const oneItem = await Item.findByPk(req.params.id)
    res.send(oneItem)
}) //fix it doesnt work
*/

module.exports = itemsRouter


