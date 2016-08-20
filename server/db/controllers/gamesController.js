const { Game } = require('../modelConnect');
const Sequelize = require('sequelize');

module.exports = {
  getGamesSchedule: (req, res) => {
    Game.findAll({
      where: { 
        Season: 2016,
      },
    })
    .then((gamesSchedule) => {
      res.send(gamesSchedule);
    })
    .catch((err) => {
      console.log(err);
    });
  },
};
