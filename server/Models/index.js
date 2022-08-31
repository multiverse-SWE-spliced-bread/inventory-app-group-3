const db = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Item = db.define('Item', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.REAL
    },
    category: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
})

module.exports = Item;