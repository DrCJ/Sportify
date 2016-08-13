const router = require('express').Router();
const playersController = require('../db/controllers/playersController');


router.post('/getAllPlayers', (req, res) => {
  playersController.getPlayersByParams(req, res);
});

router.post('/getAllTeamPlayers', (req, res) => {
  if (req.body.playerId) {
    playersController.getPlayersByIds(req, res);
  } else {
    playersController.getPlayersByName(req, res);
  }
});

router.get('/getAllPlayers', (req, res) => {
  playersController.getAllPlayers(req, res);
});

router.post('/getPlayersByIds', (req, res) => {
  playersController.getPlayersByIds(req, res);
});
module.exports = router;
