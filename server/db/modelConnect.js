const db = require('./db_config');
const User = require('./user/userModel');
const Player = require('./models/player');
const PlayerYearStat = require('./models/playerYearStat');
const PlayerGame = require('./models/playerGame');
const Team = require('./models/team');
const PlayerProjectedGame = require('./models/playerProjectedGame');
const PlayerProjectedYear = require('./models/playerProjectedYear');
const Game = require('./models/game');

PlayerProjectedGame.belongsTo(Player, { foreignKey: 'playerId', targetKey: 'id' });
Player.hasMany(PlayerProjectedGame);

PlayerProjectedYear.belongsTo(Player);
Player.hasMany(PlayerProjectedYear);

PlayerYearStat.belongsTo(Player);
Player.hasMany(PlayerYearStat);

Player.belongsTo(Team);
Team.hasMany(Player);

PlayerGame.belongsTo(Player);
Player.hasMany(PlayerGame);

PlayerGame.belongsTo(Game);
Game.hasMany(PlayerGame);
// PlayerGame.belongsTo(Team);

db.sync()
  .then(() => console.log('we are connected'))
  .catch(err => console.log(`unable to connect ${err}`));

module.exports = {
  db,
  User,
  Player,
  PlayerYearStat,
  Team,
  PlayerGame,
  PlayerProjectedGame,
};
