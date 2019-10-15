const Customer = require('../models/register.db');

//Simple version, without validation or sanitation
exports.register = function (req, res) {
    res.send('credentials to register for the salon management application');
};

exports.login = function (req, res) {
    res.send('credentials to login for the salon management application');
};

exports.get_dashboard = function (req, res) {
    res.send('dashboard');
};

exports.getService = function (req, res) {
    res.send('service is available');
};


