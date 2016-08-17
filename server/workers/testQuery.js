const request = require('request');
const fs = require('fs');
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
const Sequelize = require('sequelize');

// this is url for all player projections in one week
// https://api.fantasydata.net/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}

// this is test url for 2016 week 1 atlanta only
// const url = 'https://api.fantasydata.net/v3/nfl/projections/JSON/PlayerGameProjectionStatsByTeam/2016/1/ATL';

  // SELECT count ("playerId") FROM "playerProjectedGames" WHERE "playerId" = 9001;
db.query(
  `
  SELECT count ("players"."id") FROM "players" INNER JOIN "playerProjectedGames" ON "players"."id" = "playerProjectedGames"."playerId" WHERE "players"."id" = 7200;
  `)
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log('err!', err);
  });

// Player.findAll({
//   where: { 
//     id: playerId
//   },
//   include: [{
//     model: PlayerYearStat,
//   }],
//   limit: 25,
// })
// .then(item => {
//   console.log('all Players:', item);

//   // fs.writeFile('test.json', JSON.stringify(item), (err => {
//   //   if (err) {
//   //     console.log('Cant write!!');
//   //   }
//   //   console.log('File written!');
//   // }));
// })
// .catch(err => {
//   console.log('err:', err);
// });
