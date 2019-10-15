const express = require('express');
const router = express.Router();


const customer = require('./register.route');
const login = require('./login.route');
const dashboard = require('./customerdashboard.route');
const available = require('./checkServiceAvailability.route');

router.use('/users', customer);
router.use('/users', login);
router.use('/users',dashboard);
router.use('/users',available);


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
