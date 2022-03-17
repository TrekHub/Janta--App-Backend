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
router.get('/:id', getCustomerById, (req, res) => {
    res.send(res.customer);

})


//Create one customer endpoint
router.post('/', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        location: req.body.location

    });

    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });

    }

})


//Update one customer route
router.patch('/:id', getCustomerById, async (req, res) => {
    if (req.body.name != null) {
        res.customer.name = req.body.name
    }

    if (req.body.email != null) {
        res.customer.email = req.body.email
    }

    if (req.body.phoneNo != null) {
        res.customer.phoneNo = req.body.phoneNo
    }

    if (req.body.location != null) {
        res.customer.location = req.body.location
    }


    try {

        const updateCustomer = await res.customer.save();
        res.json(updateCustomer)
    } catch (error) {
        res.status(400).json({
            message: error.message
        });

    }

})


//Delete a specific custome 
router.delete('/:id', getCustomerById, async (req, res) => {
    try {
        await res.customer.remove();
        res.json({
            message: "Successful Deleted The Customer"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        });

    }
})



//Getting Customers by their Ids middleware
async function getCustomerById(req, res, next) {
    let customer;

    try {
        customer = await Customer.findById(req.params.id)
        if (customer == null) {
            return res.status(404).json({
                message: "Cannot Find the Customer"
            });
        }
    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
    res.customer = customer;
    next();
}


module.exports = router;