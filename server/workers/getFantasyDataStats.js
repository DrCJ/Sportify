const request = require('request');
const { fantasydata, endPoint, port, username, password } = require('../config/credentials');
const db = require('../db/modelConnect');
const yahooId = require('../db/sampleData/fdIdToYId');

// this is url for all player projections in one week
// https://api.fantasydata.net/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}

// this is test url for 2016 week 1 atlanta only
// const url = 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByTeam/2016/1/ATL';
const weeks = 17;
for (let i = 1; i <= weeks; i++) {
  const url = `https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByWeek/2015REG/${i}`;

  request({
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': fantasydata,
    },
    uri: url,
    method: 'GET',
  }, (err, response, body) => {
    if (err) {
      console.log('error:', err);
    } else if (response.statusCode === 200) {
      const arr = JSON.parse(body);

      arr.forEach(item => {
        const playerId = item.PlayerID;

        if (yahooId[playerId]) {
          item.playerId = yahooId[playerId];
          db.PlayerProjectedGame.create(item);
          console.log("Created: ",item.playerId);
        }
      });
    } else {
      console.log('err:', response);
    }
  });
}
