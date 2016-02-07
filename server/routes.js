var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut;

var userController = require('./controllers/user');
var loginController = require('./controllers/login');
var chatController = require('./controllers/chat');

module.exports = function(app, passport) {

  /**
  ** CHAT
  */
  app.get('/chat', chatController.renderChat);

  /**
  ** LOGIN
  */
  app.get('/', loginController.loginView);

  app.post('/login', passport.authenticate('local', { failureRedirect: '/login/fail/' }), loginController.loginOk);

  app.get('/login/fail', loginController.loginFail);

  app.get('/login/needed', loginController.loginNeeded);

  app.get('/logout', loginController.logout);

  /**
 USER
*/
  /*  app.get('/user/:userId/view', ensureLoggedIn('/login/needed'), adminMiddleware.ensureIsAdmin('/'), userController.view);

      app.get('/user/new', ensureLoggedIn('/login/needed'), adminMiddleware.ensureIsAdmin('/'), userController.new);

      app.post('/user/register', ensureLoggedIn('/login/needed'), adminMiddleware.ensureIsAdmin('/'), userController.register);

      app.post('/user/:userId/update', ensureLoggedIn('/login/needed'), adminMiddleware.ensureIsAdmin('/'), userController.update);

      app.get('/user/:userId/delete', ensureLoggedIn('/login/needed'), adminMiddleware.ensureIsAdmin('/'), userController.delete);

      app.get('/user/:userId/changeactive', ensureLoggedIn('/login/needed'), adminMiddleware.ensureIsAdmin('/'), userController.changeActive);*/

};
