const credentials = require('../config/credentials');
const Twitter = require('twitter');

const client = new Twitter(credentials.twitter);

module.exports = {
  getTweetsFromPlayer: (twitterHandler, fn) => {
    client.get('statuses/user_timeline',
    { screen_name: twitterHandler }, (error, tweets, response) => {
      if (!error) {
        fn(tweets)
      } else {
        console.log(error);
      }
    });
  },
};
