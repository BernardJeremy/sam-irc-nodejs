var User = require('../models/user');

exports.home = function(req, res) {
  res.send('IRC users home !');
};

exports.login = function(req, res) {
  res.send('IRC users LOGIN !');
};

exports.register = function(req, res) {
  res.send('IRC users REGISTER !');
};
