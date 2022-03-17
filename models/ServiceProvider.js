const mongoose = require('mongoose');
const ServiceProviderSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    phoneNo: {
        type: String,
        required: true

    },
    service: {
        type: String,
        required: true

    },
    location: {
        type: String,
        required: true

    },
    availability: {
        type: Boolean,
        required: true

    },
    joinedDate: {
        type: Date,
        required: true,
        default: Date.now
    }


})

module.exports = mongoose.model("ServiceProvider", ServiceProviderSchema)