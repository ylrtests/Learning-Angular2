require('dotenv').config();

const users = require('./users');
const contacts = require('./contacts');

const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

function seedCollection(collectionName, initalRecords){
    MongoClient.connect(process.env.DB_CONN, (err, db) => {
        console.log('Connected to mongodb');

        const collection = db.collection(collectionName);

        collection.remove();

        initalRecords.forEach( (item) => {
            if(item.password){
                item.password = bcrypt.hashSync(item.password, 10);
            }
        });

        collection.insertMany(initalRecords, (err, result) => {
            console.log(`${result} records inserted`);
            console.log('Closing collection');
            db.close();
            console.log('done');
        });
    });
}

seedCollection('users', users);
seedCollection('contacts', contacts);