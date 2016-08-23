const credentials = require('../config/credentials');
const Twitter = require('twitter');

const client = new Twitter(credentials.twitter);

module.exports = {
  getTweetsFromPlayer: (req, res) => {
    const twitterHandler = req.query.twitterHandler;

    client.get('statuses/user_timeline',
    { screen_name: twitterHandler }, (error, tweets, response) => {
      if (!error) {
        console.log(tweets);
        res.send(tweets);
      } else {
        console.log(error);
      }
    });
  },
};

// order: [
// ['FantasyPointsYahoo', 'DESC'],
// ],
// where: { 'Season': 2016 },
// limit: 25,
