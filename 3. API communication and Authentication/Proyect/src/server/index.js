const express = require ('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createExpressApp = require('./create-express-app');

require ('dotenv').config();

MongoClient.connect(process.env.DB_CONN, (err, db) => {
    console.log('Connected to db..');
    createExpressApp(db)
    .listen(3000, () => {
        database = db;
        console.log('Server listening on port 3000..');
    })
});


