var userController = require('./controllers/user');
var loginController = require('./controllers/login');

module.exports = function(app) {

  /**
   * LOGIN
   */

  app.get('/login/', loginController.view);

  /**
   * USER
   */

  app.get('/user/', userController.home);

  app.post('/user/login', userController.login);

  app.post('/user/register', userController.register);
};
