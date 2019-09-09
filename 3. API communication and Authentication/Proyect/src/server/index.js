const express = require ('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

require ('dotenv').config();

app.use(bodyParser.json());

let database;

MongoClient.connect(process.env.DB_CONN, (err, db) => {
    console.log('Connected to db..');
    app.listen(3000, () => {
        database = db;
        console.log('Server listening on port 3000..');
    })
});

// GET Request
app.get('/api/contacts', (req, res) => {
    const contactsCollection = database.collection('contacts');

    contactsCollection.find({}).toArray( (err, docs) => {
        return res.json(docs)
    })
})
// POST Request
app.post('/api/contacts', (req, res) => {
    const user = req.body;
    
    const contactsCollection = database.collection('contacts');

    contactsCollection.insertOne(user , (err, r) => {
        if(err){
            return res.status(500).json({error: 'Error inserting new record'});
        }

        const newRecord = r.ops[0];
        return res.status(201).json(newRecord);
    });
})

