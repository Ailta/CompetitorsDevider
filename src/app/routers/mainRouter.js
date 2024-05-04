const mainRouter = require('express').Router();

const mainController = require('../controllers/mainController');

mainRouter.get(['/', '/index'], mainController.index);

mainRouter.get(['/edit'], mainController.edit);

mainRouter.get(['/results'], mainController.results);

mainRouter.post('/addPlayer', (req, res) => {
	mainController.addPlayer(req);
	
	res.send(true);
});

mainRouter.post('/startRound', (req, res) => {
	mainController.startRound();
	
	res.send(true);
});

mainRouter.post('/changeState', (req, res) => {
	mainController.changeState(req, res);
});

mainRouter.post('/removePlayer', (req, res) => {
	mainController.removePlayer(req, res);
});

mainRouter.post('/saveRound', (req, res) => {
	mainController.saveRound(req, res);
});

mainRouter.get('*', (req, res) => {
	res.send('Error 404');
});

// Exporting router for outside use
module.exports = mainRouter;