const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const auth = require('./auth');
const apiRoutes = require('../routes/routes');

module.exports = (app) => {
  const passport = auth(app);

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({ secret: 'djrc', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/api', apiRoutes);
};
