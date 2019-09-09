const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');

function apiRouter(database) {
    const router = express.Router();

    router.use(
        checkJwt({ secret: process.env.JWT_SECRET}).unless({path: '/api/auth'})
    );
    //If previous function calls error, it'll land here.
    router.use((err, req, res, next) => {
        if(err.name === 'UnauthorizedError'){
            res.status(401).json({
                error: err.message
            })
        }
    });

    // GET Request
    router.get('/contacts', (req, res) => {

        // return res.status(500).json({
        //     'error': 'Error retriving records'
        // })

        const contactsCollection = database.collection('contacts');

        contactsCollection.find({}).toArray((err, docs) => {
            return res.json(docs)
        })
    })
    // POST Request
    router.post('/contacts', (req, res) => {

        const user = req.body;

        const contactsCollection = database.collection('contacts');

        contactsCollection.insertOne(user, (err, r) => {
            if (err) {
                return res.status(500).json({ error: 'Error inserting new record' });
            }

            const newRecord = r.ops[0];
            return res.status(201).json(newRecord);
        });
    })
    // POST Auth
    router.post('/auth' , (req, res) => {
        const user = req.body;
        const usersCollection = database.collection('users');

        usersCollection.findOne({username: user.username}, (err, result) => {
            
            if(!result){
                return res.status(404).json({error: 'User not found'})
            }

            if(!bcrypt.compareSync(user.password, result.password)){
                return res.status(401).json({error: 'Incorrect password'})
            }

            const payload = {
                username: result.username,
                admin: result.admin
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '4h'})

            return res.json({
                message: 'Successfully authenticated',
                token: token
            });

        })
    })

    return router;
}

module.exports = apiRouter;