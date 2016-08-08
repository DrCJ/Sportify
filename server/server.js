// const db = require('./db/db_config');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { passport, yf } = require('./middleware/auth');

const app = express();

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret: 'djrc' }));
app.use(passport.initialize());
app.use(passport.session());
app.yf = yf;

app.use('/', express.static(`${__dirname}/../public`));

app.get('/auth/yahoo',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/yahoo/callback',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  (req, res) => {
    // res.redirect('req.session.redirect || '/')';
    res.redirect('/');
  }
);

app.get('/roster', (req, res) => {
  const yahoo = req.app.yf;

  yahoo.user.game_teams('359', (err, data) => {
    if (data) {
      const teamKey = data.teams[0].teams[0].team_key.toString();
      yahoo.team.roster(teamKey, (e, subdata) => {
        res.json(subdata.roster);
      });
    }
  });
});

app.listen(80, () => {
  console.log('currently listening to port 80');
});
