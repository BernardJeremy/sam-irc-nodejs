var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut;

var userController = require('./controllers/user');
var loginController = require('./controllers/login');
var chatController = require('./controllers/chat');

module.exports = function (app, passport) {

  /**
  ** CHAT
  */
  app.get('/chat', ensureLoggedIn('/login/needed'), chatController.renderChat);

  /**
  ** LOGIN
  */
  app.get('/', ensureLoggedOut('/chat'), loginController.loginView);

  app.post('/login', passport.authenticate('local', { failureRedirect: '/login/fail/' }), loginController.loginOk);

  app.get('/login/fail', loginController.loginFail);

  app.get('/login/needed', loginController.loginNeeded);

  app.get('/logout', loginController.logout);

  /**
 USER
 */
  app.get('/user/new', userController.new);

  app.post('/user/register', userController.register);

};
