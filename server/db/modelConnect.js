const db = require('./db_config');
const User = require('./user/userModel');
const Player = require('./models/player');
const PlayerYearStat = require('./models/playerYearStat');
const PlayerGame = require('./models/playerGame');
const PlayerProjectedGame = require('./models/playerProjectedGame');
const PlayerProjectedYear = require('./models/playerProjectedYear');
const Team = require('./models/team');
const TeamYearStat = require('./models/teamYearStat');
const TeamGame = require('./models/teamGame');
const TeamProjectedGame = require('./models/teamProjectedGame');
const TeamProjectedYear = require('./models/teamProjectedYear');
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


TeamProjectedGame.belongsTo(Team);
Team.hasMany(TeamProjectedGame);

TeamProjectedGame.belongsTo(Game);
Game.hasMany(TeamProjectedGame);

TeamProjectedYear.belongsTo(Team);
Team.hasMany(TeamProjectedYear);

TeamYearStat.belongsTo(Team);
Team.hasMany(TeamYearStat);

TeamGame.belongsTo(Game);
Game.hasMany(TeamGame);

TeamGame.belongsTo(Team);
Team.hasMany(TeamGame);


db.sync()
  .then(() => console.log('we are connected'))
  .catch(err => console.log(`unable to connect ${err}`));

module.exports = {
  db,
  User,
  Player,
  PlayerYearStat,
  PlayerGame,
  PlayerProjectedGame,
  PlayerProjectedYear,
  Team,
  Game,
  TeamYearStat,
  TeamGame,
  TeamProjectedGame,
  TeamProjectedYear,
};
