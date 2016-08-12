const request = require('request');
const { fantasydata } = require('../config/credentials');
const {
  db,
  User,
  Player,
  PlayerYearStat,
  Team,
  PlayerGame,
  PlayerProjectedGame,
} = require('../db/modelConnect');
const yahooId = require('../db/sampleData/fdIdToYId');

// this is url for all player projections in one week
// https://api.fantasydata.net/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}

// this is test url for 2016 week 1 atlanta only
// const url = 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByTeam/2016/1/ATL';

const getPlayerProjectedWeeklyStats = () => {
  return {
    weeks: 17,
    baseUrl: 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByWeek/2015REG/',
    appendWeeks: true,
    onEachItem: (item) => {
      const playerId = item.PlayerID;

      if (yahooId[playerId]) {
        item.playerId = yahooId[playerId];
        PlayerProjectedGame.create(item);
        console.log("Created: ",item.playerId);
      }
    },
  };
};

const getPlayerYearStats = () => {
  return {
    weeks: 1,
    baseUrl: 'https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerSeasonStats/2015REG',
    appendWeeks: false,
    onEachItem: (item) => {
      const playerId = item.PlayerID;
      console.log('try to save:', playerId, item);
      if (yahooId[playerId]) {
        item.playerId = yahooId[playerId];
        delete item.ScoringDetails;
        PlayerYearStat.findOrCreate(
          {
            where: { playerId: yahooId[playerId] },
            defaults: item,
          });
        console.log('Created: ', item.playerId);
      }
    },
  };
};

const getTeamInfo = () => {
  return {
    weeks: 1,
    baseUrl: 'https://api.fantasydata.net/v3/nfl/scores/JSON/Teams',
    appendWeeks: false,
    onEachItem: (item) => {
      console.log('try to save:', item.FullName, item.TeamID);
      item.id = item.TeamID;
      Team.findOrCreate({
        where: { id: item.TeamID },
        defaults: item,
      });
    },
  };
};


const { weeks, baseUrl, appendWeeks, onEachItem } = getTeamInfo();

const getNext = (i) => {
  var url;
  if (appendWeeks) {
    url = `${baseUrl}${i}`;
  } else {
    url = `${baseUrl}`;
  }

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
      console.log('array:', arr);
      arr.forEach(item => {
        onEachItem(item);
      });
      if (i < weeks) {
        getNext(i + 1);
      }
    } else {
      console.log('err:', response);
    }
  });
};

getNext(0);
