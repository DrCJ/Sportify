const db = require('./db/db_config');
const express = require('express');
const passport = require('passport');
const YahooStrategy = require('https-passport-yahoo-oauth').Strategy;
const YahooFantasy = require('yahoo-fantasy');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { consumerKey, consumerSecret, callbackURL } = require('./config/credentials');

const app = express();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new YahooStrategy({
    consumerKey,
    consumerSecret,
    callbackURL,
  },
  (accessToken, tokenSecret, profile, done) => {
    const data = profile._json;

    const userObj = {
      id: profile.id,
      name: data.profile.nickname,
      avatar: data.profile.image.imageUrl,
      dateJoined: new Date().getTime(),
      lastUpdated: new Date().getTime(),
      lastVisit: new Date().getTime(),
      accessToken,
      tokenSecret,
      sessionHandle: profile.oauth_session_handle,
    };

    app.yf.setUserToken(userObj.accessToken, userObj.tokenSecret, userObj.sessionHandle);

    return done(null, userObj);
  })
);

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret: 'djrc' }));
app.use(passport.initialize());
app.use(passport.session());
app.yf = new YahooFantasy(consumerKey, consumerSecret);

app.use('/', express.static(`${__dirname}/../public`));
app.get('/test', (req, res) => {
  const yf = req.app.yf;
  let teamKey, roster;

  yf['user']['game_teams']('359', (err,data) => {
    teamKey = data.teams[0].teams[0].team_key.toString();
    yf.team.roster(teamKey, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data.roster);
      }
    });
  });
});

app.get('/auth/yahoo',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/yahoo/callback',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  (req, res) => {
    // res.redirect('req.session.redirect || '/')';
    res.redirect('/test');
  }
);

app.listen(80, () => {
  console.log('currently listening to port 80');
});
