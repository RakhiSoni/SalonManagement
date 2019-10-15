
const mongoose = require('mongoose');

var BusinessSchema = new mongoose.Schema({
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

    workinghour: {
        type: TimeRanges,
        required: true
    },

    closedstatus: {
        type: Boolean,
        required: true,
    },

});

mongoose.model('Business', BusinessSchema);