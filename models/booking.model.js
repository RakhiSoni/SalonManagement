
const mongoose = require('mongoose');

var BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },

    email: {
        type: String,
        required: true,
        max: 100
    },

    category: {
        type: String,
        required: true,
    },

    services: {
        type: Object,
        required: true
    },

    time: {
        type: TimeRanges,
        required: true
    },

    bookingstatus: {
        type: Boolean,
        required: true,
    },

});

BookingSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Bookings', BookingSchema);