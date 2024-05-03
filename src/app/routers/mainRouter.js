const mainRouter = require('express').Router();

const mainController = require('../controllers/mainController');

mainRouter.get(['/', '/index'], mainController.index);

mainRouter.get('*', (req, res) => {
	res.send('Error 404');
});

// Exporting router for outside use
module.exports = mainRouter;