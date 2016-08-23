const router = require('express').Router();
const playersController = require('../db/controllers/playersController');
const gamesController = require('../db/controllers/gamesController');
const twiterController = require('../middleware/twitter');

router.get('/getTweets', (req, res) => {
  twiterController.getTweetsFromPlayer(req, res);
});

router.get('/getAllPlayers', (req, res) => {
  playersController.getAllPlayers(req, res);
});

router.post('/getGamesSchedule', (req, res) => {
  gamesController.getGamesSchedule(req, res);
});

router.post('/getPlayersByParams', (req, res) => {
  playersController.getPlayersByParams(req, res);
});

router.post('/getPlayersByIds', (req, res) => {
  playersController.getPlayersByIds(req, res);
});

router.post('/getPlayersByName', (req, res) => {
  playersController.getPlayersByName(req, res);
});

router.post('/getProjectedVsActual', (req, res) => {
  playersController.getProjectedVsActual(req, res);
});

module.exports = router;
