const router = require('express').Router();
const playersController = require('../db/controllers/playersController');


router.post('/getAllPlayers', (req, res) => {
  playersController.getPlayersByParams(req, res);
});

router.post('/getAllTeamPlayers', (req, res) => {
  playersController.getPlayersByIds(req, res);
});

router.get('/getAllPlayers', (req, res) => {
  playersController.getAllPlayers(req, res);
});

// router.get('/*', (req, res) => {
// });

module.exports = router;
