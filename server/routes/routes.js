const router = require('express').Router();
const playersController = require('../db/controllers/playersController');


router.post('/getPlayersByParams', (req, res) => {
  playersController.getPlayersByParams(req, res);
});

router.get('/getAllPlayers', (req, res) => {
  playersController.getAllPlayers(req, res);
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
