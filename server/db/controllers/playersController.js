const { PlayerProjectedGame, Player, db } = require('../modelConnect');
const Sequelize = require('sequelize');

module.exports = {
  getAllPlayers: (req, res) => {
    Player.findAll({
      include: [{
        model: PlayerProjectedGame,
      }],
      limit: 25
    })
    .then((playerData) => {
      res.send(playerData);
    })
    .catch((err) => {
      console.log(err);
    });
  },
  getPlayersByParams: (req, res) => {
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
    ON "players"."id" = "playerProjectedGames"."playerId" WHERE ${subQ}`;

    db.query(q).then(stats => {
      res.send(stats);
    });
  },
};
