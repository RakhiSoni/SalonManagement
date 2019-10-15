
const mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        max: 100
    },

    lastname: {
        type: String,
        required: true,
        max: 100
    },

    contactnumber: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        default: 'CUSTOMER',
    },

    username: {
        type: String,
        required: true,
        min: 3, 
    },

    password: {
        type: String,
        required: true,
        min: 8
    }
});

// Custom validation for email
CustomerSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Customer', CustomerSchema);