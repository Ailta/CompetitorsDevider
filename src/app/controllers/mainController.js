const modelPlayers = require('../models/playersModel.js');

exports.index = (req, res) => {
	res.render('root/index', {players: modelPlayers.getPlayers()});
}