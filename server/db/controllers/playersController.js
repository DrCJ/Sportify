const Player = require('../models/player');
const PlayerYearStat = require('../models/playerYearStat');
const Sequelize = require('sequelize');

module.exports = {
  getAllPlayers: (req, res) => {
  Player.findAll({
    // include: [{
    //   model: PlayerYearStat,
    //   where: { id: Sequelize.col('player.id')}
    // }],
  })
		.then((playerData) => {
			res.send(playerData);
		});
	}
}