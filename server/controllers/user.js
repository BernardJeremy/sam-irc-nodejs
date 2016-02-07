var User = require('../models/user');
var sha1 = require('sha1');

exports.view = function(req, res) {
  var userId = req.params.userId;
  UserGroup.findAll().then(function(userGroups) {
    User.findById(userId).then(function(user) {
      res.render('pages/user-view', {
        user:user,
        userGroups:userGroups,
      });
    });
  });
};

exports.new = function(req, res) {
  UserGroup.findAll().then(function(userGroups) {
    var user = User.build({
      id: 0,
      username: '',
      password: '',
      active: true,
      email: '',
      userGroupId: 0,
    });
    res.render('pages/user-view', {
        user:user,
        userGroups:userGroups,
      });
  });
};

exports.register = function(req, res) {
  var updatedUser = req.body.user;
  if (updatedUser.password == '') {
    req.flash('flash', 'Mot de passe vide !');
    res.redirect('/user/new');
    return;
  }

  updatedUser.password = sha1(updatedUser.password);
  User.create(
    req.body.user
  ).then(function(user) {
    req.flash('flash', 'Utilisateur crée !');
    res.redirect('/user/' + user.id + '/view');
  }).catch(function(err) {
    req.flash('flash', 'Erreur : ' + err);
    res.redirect('/user/new');
  });
};

exports.update = function(req, res) {
  var userId = req.params.userId;
  var updatedUser = req.body.user;

  User.findById(userId).then(function(user) {
    user.username = updatedUser.username;
    user.email = updatedUser.email;
    user.userGroupId = updatedUser.userGroupId;
    user.active = updatedUser.active;
    if (updatedUser.password != '') {
      user.password = sha1(updatedUser.password);
    };

    user.save().then(function(user) {
      req.flash('flash', 'Utilisateur modifié !');
      res.redirect('/user/' + user.id + '/view');
    }).catch(function(err) {
      req.flash('flash', 'Erreur : ' + err);
      res.redirect(req.header('Referer'));
    });
  });
};

exports.delete = function(req, res) {
  var userId = req.params.userId;
  User.findById(userId).then(function(user) {
    return user.destroy();
  }).then(function() {
    req.flash('flash', 'Utilisateur supprimé !');
    res.redirect('/admin/');
  }).catch(function(err) {
    req.flash('flash', 'Erreur : ' + err);
    res.redirect('/admin/');
  });
};

exports.changeActive = function(req, res) {
  var userId = req.params.userId;

  User.findById(userId).then(function(user) {
    user.active = user.active ? false : true;
    user.save().then(function(user) {
      req.flash('flash', 'Utilisateur modifié !');
      res.redirect('/admin/');
    }).catch(function(err) {
      req.flash('flash', 'Erreur : ' + err);
      res.redirect('/admin/');
    });
  });
};
