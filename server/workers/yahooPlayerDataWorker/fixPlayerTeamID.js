const { consumerKey, consumerSecret, callbackURL } = require('../../config/credentials');
const YahooFantasy = require('yahoo-fantasy');
const yahoo = new YahooFantasy(consumerKey, consumerSecret);
const { db, Player } = require('../../db/modelConnect');
const yahooMap = require('../../db/sampleData/fdIdToYId');
var playerIDs = [];
for (let k in yahooMap) {
  playerIDs.push(yahooMap[k]);
}
//2015 348
// const playerKeys = ['348.p.7200'];

const teamKeys = {
  ARI: 1,
  ATL: 2,
  BAL: 3,
  CAR: 5,
  BUF: 4,
  CHI: 6,
  CIN: 7,
  CLE: 8,
  DAL: 9,
  DEN: 10,
  DET: 11,
  GB: 12,
  HOU: 13,
  IND: 14,
  JAX: 15,
  KC: 16,
  LA: 32,
  MIA: 19,
  NE: 21,
  NO: 22,
  NYG: 23,
  NYJ: 24,
  OAK: 25,
  PHI: 26,
  MIN: 20,
  PIT: 28,
  SD: 29,
  SEA: 30,
  SF: 31,
  TB: 33,
  TEN: 34,
  WAS: 35,
};



// const allKeys = yahooIDs.map(id => `348.p.${id}`);
// const playerKeys = all

// const interval = 1;
var index = 0;

const fetchPlayers = () => {
  var id = playerIDs[index];
  if (!id) {
    console.log('All Done!');
    return;
  }
  Player.find({
    where: { id: id },
    })
  .then(player => {
    var teamName = player.editorial_team_abbr.toUpperCase();
    var teamID = teamKeys[teamName];
    console.log('team:', teamName, teamID);

    db.query(`UPDATE players set "teamId"=${teamID} where id=${id}`)
      .then(done => {
        console.log('done with', id, teamName, teamID);
        index++;
        fetchPlayers();
      })
      .catch(err => {
        index++;
        fetchPlayers();
      });
  })
  .catch(err => {
    console.log('Opps error:', err);
    index++;
    fetchPlayers();
  });
};

fetchPlayers();
