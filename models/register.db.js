
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/customerDB', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB....'))
    .catch(err => console.error('could not connect to mongo', err));


require('./customer.model');