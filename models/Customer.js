const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({

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
    location: {
        type: String,
        required: true

    },
    joinedDate: {
        type: Date,
        required: true,
        default: Date.now
    }

});


module.exports = mongoose.model('Customer', customerSchema);