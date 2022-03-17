const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();




//Get all customers endpoint
router.get('/', async (req, res) => {

    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });

    }

});

//Get one customer endpoint
router.get('/:id', (req, res) => {

})


//Create one customer endpoint
router.post('/', (req, res) => {

})


//Update one customer route
router.patch('/:id', (req, res) => {

})


module.exports = router;