const db = require('./db_config');
const User = require('./user/userModel');
const Player = require('./models/player');
const PlayerYearStat = require('./models/playerYearStat');
const PlayerGame = require('./models/playerGame');
const Team = require('./models/team');
const PlayerProjectedGame = require('./models/playerProjectedGame');

PlayerProjectedGame.belongsTo(Player, { foreignKey: 'playerId', targetKey: 'id' });
Player.hasMany(PlayerProjectedGame);

PlayerYearStat.belongsTo(Player);
Player.hasMany(PlayerYearStat);

Player.belongsTo(Team);
Team.hasMany(Player);

PlayerGame.belongsTo(Player);
Player.hasMany(PlayerGame);

db.sync()
  .then(() => console.log('we are connected'))
  .catch(err => console.log(`unable to connect ${err}`));

module.exports = {
  db,
  User,
  Player,
  Team,
  PlayerGame,
  PlayerProjectedGame,
};
