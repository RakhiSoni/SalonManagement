
const mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({
    businessname: {
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

    hourstofinish: {
        type: TimeRanges,
        required: true
    },

    availability: {
        type: Boolean,
        required: true,
    },

});

mongoose.model('Service', ServiceSchema);