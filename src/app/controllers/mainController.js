const modelPlayers = require('../models/playersModel.js');

exports.index = (req, res) => {
	res.render('root/index', {players: modelPlayers.getPlayers()});
}

exports.edit = (req, res) => {
	res.render('root/edit', {players: modelPlayers.getPlayers()});
}

exports.addPlayer = (req) => {
	modelPlayers.addPlayer(req.body.playerName);
}

exports.removePlayer = (req, res) => {
	res.send(modelPlayers.removePlayer(req.body.playerId));
}

exports.startRound = () => {
	modelPlayers.startRound();
}

exports.changeState = (req, res) => {
	res.send(modelPlayers.changeState(req.body.playerId, req.body.competitorId));
}