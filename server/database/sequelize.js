var dbConfig = require('../config/db.conf');
if (!dbConfig) {
  process.exit();
}

var Sequelize = require('sequelize');

module.exports = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);
