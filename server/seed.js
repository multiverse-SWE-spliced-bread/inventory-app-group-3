//This is a snippet for populating the database with seed data.

const {sauces, items} = require('./seedData.js');

const db = require('./db');
const Item = require('./Models/Item');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await db.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(val => Item.create(val)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed()

module.exports = seed
