var Sequelize = require('sequelize');

var db = require('../database/sequelize');

var User = db.define('user', {
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.CHAR('32'),
    allowNull: false
  }
});

db.sync([{force:true}]);

module.exports = User;
