const router = require('express').Router();
const playersController = require('../db/controllers/playersController');


router.post('/getAllPlayers', (req, res) => {
  playersController.getPlayersByParams(req, res);
});



router.get('/getAllPlayers', (req, res) => {
	console.log('working?')
  playersController.getAllPlayers(req, res);
});

module.exports = router;
