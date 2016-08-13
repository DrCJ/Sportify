const { PlayerProjectedGame, PlayerProjectedYear, Player, db } = require('../modelConnect');
const Sequelize = require('sequelize');
const { sortByPosition } = require('../helpers/sortByPosition');
const { getHighResolution } = require('../helpers/getHighResolution');

module.exports = {
  getAllPlayers: (req, res) => {
    PlayerProjectedYear.findAll({
      order: [
      ['FantasyPointsYahoo', 'DESC'],
      ],
      where: { 'Season': 2016 },
      limit: 25,
    })
    .then((playerData) => {
      res.send(playerData);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  //  we should provide a lookup table for acceptable params fields
  //  here since we are accepting user input = security issue
  getPlayersByParams: (req, res) => {
    const filters = req.body.filters;
    const limit = 25;
    const orderBy = req.body.orderBy || 'FantasyPointsYahoo';
    let subQ = '';
    let orderStat = '';
    let tableName = req.body.tableName || 'playerProjectedYears';
    for (const key in filters) {
        if (subQ === '') { subQ = 'WHERE '; }
        orderStat = filters[key];
        if (!isNaN(Number(orderStat))) {
          orderStat = Number(orderStat);
        }
        subQ += `"${tableName}"."${key}" = '${orderStat}' AND `;
    }
    subQ = subQ.substr(0, subQ.length - 4);
    subQ += `ORDER BY "${orderBy}" DESC LIMIT ${limit}`;
    const q = `SELECT * FROM players INNER JOIN "${tableName}"
    ON "players"."id" = "${tableName}"."playerId" ${subQ}`;
    console.log('-----------query', q);
    db.query(q).then(stats => {
      res.send(stats);
    });
  },
  getPlayersByIds: (req, res) => {

    const stat = req.body;
    const limit = 25;
    let subQ = '';
    let orderStat = '';
    for (const filter in stat) {
      orderStat = stat[filter];
      if (!isNaN(Number(orderStat))) {
        orderStat = Number(orderStat);
      }
      subQ += `"playerProjectedGames"."${filter}" = '${orderStat}' AND `;
    }
    subQ = subQ.substr(0, subQ.length - 4);
    subQ += `ORDER BY "playerId" DESC LIMIT ${limit}`;
    const q = `SELECT * FROM players INNER JOIN "playerProjectedGames"
    ON "players"."id" = "playerProjectedGames"."playerId"
    WHERE "playerProjectedGames"."playerId" IN (${stat.playerId.join()})
    AND "playerProjectedGames"."Week" = 1`;


    db.query(q).then(stats => {
      let sortedStats = sortByPosition(stats);
      sortedStats = getHighResolution(sortedStats);
      res.send(sortedStats);
    });
  },
  getPlayersByName: (req, res) => {
    PlayerProjectedYear.findOne({
      where: {
        'Name': {
          $iLike: `%${req.body.playerOne}%`
        }
      },
    })
    .then((playerData) => {
      const responseArr = [playerData, playerData];
      res.send(responseArr);
    })
    .catch((err) => {
      console.log(err);
    });
  },
};
