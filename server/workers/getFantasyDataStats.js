const request = require('request');
const { fantasydata } = require('../config/credentials');
const {
  db,
  User,
  Player,
  PlayerYearStat,
  PlayerGame,
  PlayerProjectedGame,
  PlayerProjectedYear,
  Team,
  Game,
  TeamYearStat,
  TeamGame,
  TeamProjectedGame,
  TeamProjectedYear,
} = require('../db/modelConnect');
const yahooId = require('../db/sampleData/fdIdToYId');
const getTeamID = require('./getTeamID');

// this is url for all player projections in one week
// https://api.fantasydata.net/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}

// this is test url for 2016 week 1 atlanta only
// const url = 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByTeam/2016/1/ATL';

const getPlayerProjectedWeeklyStats = () => {
  return {
    weeks: 17,
    baseUrl: 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByWeek/2016REG/',
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

const getPlayerWeeklyGames = () => {
  return {
    weeks: 17,
    baseUrl: 'https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerGameStatsByWeek/2015REG/',
    appendWeeks: true,
    onEachItem: (item) => {
      const playerId = item.PlayerID;

      if (yahooId[playerId]) {
        item.playerId = yahooId[playerId];
        item.gameId = item.GameKey;
        // PlayerGame.create(item);
        PlayerGame.findOrCreate({
          where: { playerId: item.playerId, gameId: item.GameKey },
          defaults: item,
        });

        console.log("Created: ", item.playerId, item.gameId);
      }
    },
  };
};

const getPlayerYearStats = () => {
  return {
    weeks: 1,
    //  YearStats
    // baseUrl: 'https://api.fantasydata.net/v3/nfl/stats/JSON/PlayerSeasonStats/2015REG',

    // ProjectedYear
    baseUrl: 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerSeasonProjectionStats/2015REG',
    appendWeeks: false,
    onEachItem: (item) => {
      const playerId = item.PlayerID;
      console.log('try to save:', playerId, item);
      if (yahooId[playerId]) {
        item.playerId = yahooId[playerId];
        delete item.ScoringDetails;
        //  YearStat
        // PlayerYearStat.findOrCreate(

        //  ProjectedYear
        PlayerProjectedYear.findOrCreate(
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

const getTeamYearStats = () => {
  return {
    weeks: 1,
    //Year Stats
    // baseUrl: 'https://api.fantasydata.net/v3/nfl/stats/JSON/FantasyDefenseBySeason/2015REG',

    //Year Projections
    // baseUrl: 'https://api.fantasydata.net/v3/nfl/projections/JSON/FantasyDefenseProjectionsBySeason/2015REG',
    baseUrl: 'https://api.fantasydata.net/v3/nfl/projections/JSON/FantasyDefenseProjectionsBySeason/2016REG',
    appendWeeks: false,
    onEachItem: (item) => {
      const teamId = getTeamID[item.Team];
      console.log('try to save:', item.Team, teamId, item.Season);
      if (teamId, item.Season) {
        delete item.ScoringDetails;

        //Year Stats
        // TeamYearStat.findOrCreate(

        //Year Projections
        TeamProjectedYear.findOrCreate(
          {
            where: { teamId: teamId, Season: item.Season },
            defaults: item,
          });
        console.log('Created: ', item.Team, teamId);
      }
    },
  };
};

const getTeamGameStats = () => {
  return {
    weeks: 17,

    //Weekly Stats
    // baseUrl: 'https://api.fantasydata.net/v3/nfl/stats/JSON/FantasyDefenseByGame/2015REG/',

    //Weekly Projections
    baseUrl: 'https://api.fantasydata.net/v3/nfl/projections/JSON/FantasyDefenseProjectionsByGame/2015REG/',
    appendWeeks: true,
    onEachItem: (item) => {
      const teamId = getTeamID[item.Team];
      console.log('try to save:', item.Team, teamId, item.GameKey);
      if (teamId) {
        item.teamId = teamId;
        item.gameId = item.GameKey;
        delete item.ScoringDetails;

        //Weekly Stats
        // TeamGame.findOrCreate(

        //Weekly Projections  
        TeamProjectedGame.findOrCreate(
          {
            where: { teamId: item.teamId, gameId: item.gameId },
            defaults: item,
          });
        console.log('Created: ', item.Team, teamId);
      }
    },
  };
};




const getGameInfo = () => {
  return {
    weeks: 1,
    baseUrl: 'https://api.fantasydata.net/v3/nfl/scores/JSON/Schedules/2015REG',
    appendWeeks: false,
    onEachItem: (item) => {
      console.log('try to save:', item.HomeTeam, 'vs', item.AwayTeam);
      item.id = item.GameKey;
      console.log('StadiumDetails:', item.StadiumDetails);
      if (item.StadiumDetails) {
        item.StadiumID = item.StadiumDetails.StadiumID;
        Game.findOrCreate({
          where: { id: item.GameKey },
          defaults: item,
        });
      }
    },
  };
};


const { weeks, baseUrl, appendWeeks, onEachItem } = getPlayerYearStats();
const startWeek = 1;

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
      } else {
        console.log('ALL DONE!');
      }
    } else {
      console.log('err:', response);
    }
  });
};

getNext(startWeek);
