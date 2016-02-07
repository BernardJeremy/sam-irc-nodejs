var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var passport = require('./libs/passport');

var port = require('./config/config.json').port;

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(cookieParser('secretirc602'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat',
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.flash = req.flash('flash');
  res.locals.user = req.user;
  next();
});

require('./routes')(app, passport);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
