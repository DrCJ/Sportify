const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const auth = require('./auth');

module.exports = (app) => {
  const passport = auth(app);

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({ secret: 'djrc', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
};
