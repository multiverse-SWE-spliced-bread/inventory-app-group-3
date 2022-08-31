const { db } = require('../db')
const { Item, seedItems } = require('./Item')
const { User, seedUsers } = require('./User')

Item.belongsToMany(User, {through: 'Purchased'})
User.belongsToMany(Item, {through: 'Purchased'})

/*
//adding fake data tp db is often called 'seeding' the db
async function seed () {
   
    //deletes all tables and returns them empty
    await db.sync({ force: true })

    //create some fake data
    for (let item of seedItems) {
        await Item.create(item)
    }
    for (let user of seedUsers) {
        await User.create(user)
    }
}

module.exports = { seed, User, Item}
*/