const passport = require('passport');
const YahooStrategy = require('https-passport-yahoo-oauth').Strategy;
const YahooFantasy = require('yahoo-fantasy');
const { consumerKey, consumerSecret, callbackURL } = require('./../config/credentials');

module.exports = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new YahooStrategy({ consumerKey, consumerSecret, callbackURL },
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
      app.yf = new YahooFantasy(consumerKey, consumerSecret);
      app.yf.setUserToken(userObj.accessToken, userObj.tokenSecret, userObj.sessionHandle);
      return done(null, userObj);
    })
  );

  return passport;
};
