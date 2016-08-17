const { PlayerProjectedGame, PlayerProjectedYear, Player, db } = require('../modelConnect');
const Sequelize = require('sequelize');
const { sortByPosition } = require('../helpers/sortByPosition');
const { getHighResolution } = require('../helpers/getHighResolution');

module.exports = {

  //  the shape of this is slightly different from getPlayersByParams
  //  because this one uses Sequelize vs Raw Sql, should have a consistent approach
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
    let orderStat = '';
    const tableName = req.body.tableName || 'playerProjectedYears';
    const season = req.body.season || '2016';
    let subQ = `WHERE "${tableName}"."Season"=${season} AND `;
    for (const key in filters) {
        // if (subQ === '') { subQ = 'WHERE '; }
        orderStat = filters[key];
        if (!isNaN(Number(orderStat))) {
          orderStat = Number(orderStat);
        }
        subQ += `"${tableName}"."${key}" = '${orderStat}' AND `;
    }
    subQ = subQ.substr(0, subQ.length - 4);  //delete the last 'AND'
    subQ += `ORDER BY "${orderBy}" DESC LIMIT ${limit}`;
    const q = `SELECT * FROM players INNER JOIN "${tableName}"
    ON "players"."id" = "${tableName}"."playerId" ${subQ}`;
    console.log('-----------query', q);
    db.query(q).then(stats => {
      delete stats[1];  //this query returns a lot of "junk" values at index 1;
      res.send(stats);
    })
    .catch(err => {
      console.log('db error:', err);
    });
  },

  // see above regarding security / lookup table
  getPlayersByIds: (req, res) => {

    const stat = req.body;
    // const limit = 25;
    // let subQ = '';
    // let orderStat = '';
    // for (const filter in stat) {
    //   orderStat = stat[filter];
    //   if (!isNaN(Number(orderStat))) {
    //     orderStat = Number(orderStat);
    //   }
    //   subQ += `"playerProjectedGames"."${filter}" = '${orderStat}' AND `;
    // }
    // subQ = subQ.substr(0, subQ.length - 4);
    // subQ += `ORDER BY "playerId" DESC LIMIT ${limit}`;
    const q = `SELECT * FROM players INNER JOIN "playerProjectedGames"
    ON "players"."id" = "playerProjectedGames"."playerId"
    WHERE "playerProjectedGames"."playerId" IN (${stat.playerId.join()})`;

        // AND "playerProjectedGames"."Week" = 1`;

    db.query(q).then(stats => {
      let sortedStats = sortByPosition(stats);
      // sortedStats = getHighResolution(sortedStats);
      res.send(sortedStats);
    });
  },
  getPlayersByName: (req, res) => {
    PlayerProjectedYear.findOne({
      order: [
      ['FantasyPointsYahoo', 'DESC'],
      ],
      where: {
        Name: {
          $iLike: `%${req.body.playerNames[0]}%`,
        },
      },
      include: [
        { model: Player, required: true },
      ],
    })
    .then((playerData) => {
      // WARNING: Callback hell. Will have to refactor this soon.
      PlayerProjectedYear.findOne({
        order: [
        ['FantasyPointsYahoo', 'DESC'],
        ],
        where: {
          Name: {
            $iLike: `%${req.body.playerNames[1]}%`,
          },
        },
        include: [
          { model: Player, required: true },
        ],
      }).then((player2Data) => {
        res.send([[playerData, player2Data]]);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  },
  getProjectedVsActual: (req, res) => {
    const position = req.body.position || 'RB';
    const season = req.body.season || 2016;
    const limit = req.body.limit || 10;
    const result = {};

    const q = `SELECT "playerId", "FantasyPointsYahoo" 
    FROM "playerProjectedYears"
    WHERE "Position"='${position}' AND 
    "Season"='${season}' ORDER BY "FantasyPointsYahoo" 
    DESC LIMIT ${limit};`;

    db.query(q).then(stats => {
      result.projected = stats[0];

      const playerIDs = stats[0].map(player => player.playerId);

      const q2 = `SELECT "playerId", "FantasyPointsYahoo" 
      FROM "playerYearStats"
      WHERE "playerId" IN (${playerIDs.join()})`;

      db.query(q2).then(stats2 => {
        result.actual = stats2[0];
        res.send(result);
      });
    });

  },
};
