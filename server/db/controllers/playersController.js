const { PlayerProjectedGame, Player, db } = require('../modelConnect');
const Sequelize = require('sequelize');

module.exports = {
  getAllPlayers: (req, res) => {
    Player.findAll({
      include: [{
        model: PlayerProjectedGame,
      }],
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
    console.log(stat);
    const limit = 25;
    let subQ = '';
    let orderStat = '';
    for (const filter in stat) {
      orderStat = stat[filter];
      subQ += `"playerProjectedGames"."${filter} = '${orderStat}' AND `;
    }
    subQ += `"playerProjectedGames"."Week" = 1
    ORDER BY ${orderStat} DESC LIMIT ${limit}`;
    const q = `SELECT * FROM players INNER JOIN "playerProjectedGames"
    ON "players"."id" = "playerProjectedGames"."playerId" WHERE ${subQ}`;

    db.query(q).then(stats => {
      res.send(stats);
    });
  },
};
