const db = require('./db/db_config');
const express = require('express');
const passport = require('passport');
const YahooStrategy = require('https-passport-yahoo-oauth').Strategy
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

app.use('/', express.static(`${__dirname}/../public`));

app.listen(80, () => {
  console.log('currently listening to port 3000');
});
