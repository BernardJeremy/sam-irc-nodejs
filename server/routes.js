var userController = require('./controllers/user');

module.exports = function(app) {
  app.get('/user/', userController.home);

  app.post('/user/login', userController.login);

  app.post('/user/register', userController.register);
};
