const { Game } = require('../modelConnect');
const Sequelize = require('sequelize');

module.exports = {
  getGamesSchedule: (req, res) => {
    Game.findAll({
      order: [
        ['Date', 'ASC'],
      ],
      where: {
        Season: 2016,
        Week: Number(req.body.week),
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

// order: [
// ['FantasyPointsYahoo', 'DESC'],
// ],
// where: { 'Season': 2016 },
// limit: 25,
