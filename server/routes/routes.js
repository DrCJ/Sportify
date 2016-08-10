const router = require('express').Router();
const playersController = require('../db/controllers/playersController');

router.get('/getAllPlayers', (req, res) => {
	console.log('working?')
  playersController.getAllPlayers(req, res);
});

module.exports = router;