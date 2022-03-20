const express = require('express');
const router = express.Router();
const ServiceProvider = require('../models/ServiceProvider')


//Get all service providers
router.get('/', async (req, res) => {

    try {
        const serviceProviders = await ServiceProvider.find();
        res.json(serviceProviders);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });

    }

})
//Get service provider by 
router.get('/:id', getServiceProvidersBYId, (req, res) => {
    res.send(res.serviceProvider);


})
//Create a service provider
router.post('/', async (req, res) => {
    const serviceProvider = new ServiceProvider({
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        service: req.body.service,
        location: req.body.location,
        availability: req.body.availability

    });

    try {
        const newServiceProvider = await serviceProvider.save();
        res.status(201).json(newServiceProvider);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }



})


//Update service provider
router.patch('/:id', getServiceProvidersBYId, async (req, res) => {

    if (req.body.name != null) {
        res.customer.name = req.body.name
    }

    if (req.body.email != null) {
        res.customer.email = req.body.email
    }

    if (req.body.phoneNo != null) {
        res.customer.phoneNo = req.body.phoneNo
    }
    if (req.body.service != null) {
        res.customer.service = req.body.service
    }

    if (req.body.location != null) {
        res.customer.location = req.body.location
    }
    if (req.body.availability != null) {
        res.customer.availability = req.body.availability
    }

    try {
        const updatedServiceProvider = await res.serviceProvider.save();
        res.json(updatedServiceProvider);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})


//Delete a service provider
router.delete('/:id', getServiceProvidersBYId, async (req, res) => {
    try {
        await res.serviceProvider.remove()
        res.json({
            message: "Successfuly Deleted the Service Provider"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

})

//Getting Service Providers by their ids middleware
async function getServiceProvidersBYId(req, res, next) {
    let serviceProvider;

    try {
        serviceProvider = await ServiceProvider.findById(req.params.id);
        if (serviceProvider == null) {
            return res.status(404).json({
                message: "Cannot find the Specified Service Provider"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }

    res.serviceProvider = serviceProvider;
    next();
};




module.exports = router