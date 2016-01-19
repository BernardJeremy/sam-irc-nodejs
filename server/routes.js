var userController = require('./controllers/user');

module.exports = function (app) {
     app.get('/', userController.home);
};
