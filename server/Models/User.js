const { db, DataTypes } = require('../db')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
})

const seedUsers = [
    {
        name: "Lindani",
        email: "lindani@gmail.com"
    },
    {
        name: "Simon",
        email: "simon@gmail.com"
    },
    {
        name: "Julz",
        email: "julian@gmail.com"
    },
    {
        name: "Elise",
        email: "elise@gmail.com"
    }
]

module.exports = { User, seedUsers }