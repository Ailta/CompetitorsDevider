const jsondb = require('simple-json-db');

exports.getPlayers = (id, addPop) => {
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	players = db.JSON();

	return players;
}

exports.addPlayer = (playerName) => {
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	
	let player = {
		"name": playerName,
		"competitors": {
			"0": {
				"name": "",
				"result": "noResult"
			},
			"1": {
				"name": "",
				"result": "noResult"
			}
		},
		"points": 0,
		"result": "NE"
	}
	
	let playerId = db.get('next_id');
	db.set(playerId, player);
	db.set('next_id', playerId-(-1));
	
	db.sync(); // Save changes to disk
}

exports.removePlayer = (playerId) => {
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	let next_id = db.get('next_id');
	
	// console.log(playerId);
	
	if (playerId < next_id){
		db.delete(playerId);
		
		for (let i = playerId+1; i < next_id; i++){
			let player = db.get(i);
			db.set(i-1, player);
			if (i + 1 == next_id){
				db.delete(i);
			}
		}
		
		db.set('next_id', next_id-1);
		db.sync();
		return true;
	}
	
	return false;
}

exports.startRound = () => {
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	let next_id = db.get('next_id');
	
	// console.log(playerId);
	
	let players = [];
	for (let i = 0; i < next_id; i++){
		players.push(db.get(i).name);
	}
	
	shuffle = true;
	do{
		players = shuffleArray(players);
		let error = false;
		
		for (let i = 0; i < next_id; i++){
			let player = db.get(i);
			
			if (player.name == players[i]){
				error = true;
				console.log('error has appeared, reshuffiling...')
				break;
			}
			
			player.points = 0;
			player.competitors[0].result = "noResult";
			player.competitors[1].result = "noResult";
			
			let competitor = db.get(getPlayerId(players[i]));
			
			competitor.competitors[1].name = player.name;
			
			player.competitors[0].name = players[i];
			
			db.set(i, player);
		}
		
		if (!error) {
			shuffle = false;
		}
	
	} while (shuffle)
	

	db.sync();
}

function getPlayerId(playerName){
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	let next_id = db.get('next_id');
	
	for (let i = 0; i < next_id; i++){
		let player = db.get(i);
		if (player.name == playerName){
			return i;
		}
	}
	
	return false;
}

function shuffleArray(array){
	
	for (let i = 0; i < array.length; i++){
		let index = Math.floor(Math.random()*i);
		
		[array[i], array[index]] = [array[index], array[i]];
	}
	
	return array;
}

exports.changeState = (playerId, competitorId) => {
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	let next_id = db.get('next_id');
	
	// console.log(playerId);
	
	if (playerId < next_id){
		let player = db.get(playerId);
		
		let competitorDbId = getPlayerId(player.competitors[competitorId].name);
		let competitor = db.get(competitorDbId);
		
		switch (player.competitors[competitorId].result){
			case "Win":
				player.competitors[competitorId].result = "Lost";
				competitor.competitors[1].result = "Win";
				break;
			default:
				player.competitors[competitorId].result = "Win";
				competitor.competitors[1].result = "Lost";
		}
		
		player = countPoints(player, competitorId);
		competitor = countPoints(competitor, 1);
		
		db.set(playerId, player);
		db.set(competitorDbId, competitor);
		
		db.sync();
		return true;
	}
	
	return false;
}

function countPoints(player, competitorId) {
	/*if (player.competitors[competitorId].result){
		player.points -= -1;
	} else {
		player.points -= 1;
	}
	
	if (player.points < 0){
		player.points = 0;
	}
	
	switch (player.points) {
		case 1: 
			player.result = "2. Fáze";
			break;
		case 2:
			player.result = "Play-Off";
			break;
		default:
			player.result = "Ne";
	}*/
	
	// Redundant solution
	if (player.competitors[0].result == "Win" && player.competitors[1].result == "Win"){
		player.result = "Play-Off";
		player.points = 2;
	} else if (player.competitors[0].result != "Win" && player.competitors[1].result == "Win" || 
				player.competitors[0].result == "Win" && player.competitors[1].result != "Win"){
		player.result = "2. Fáze";
		player.points = 1;
	} else {
		player.result = "Ne";
		player.points = 0;
	}
	
	return player;
}

exports.getResults = () => {
	const db = new jsondb('../data/results.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	results = db.JSON();

	return results;
}

exports.saveRound = (nameOfSave) => {
	const db = new jsondb('../data/results.json');
	const dbRound = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	let next_id = db.get('next_id');

	db.set(next_id, {"name": nameOfSave, "data": dbRound.JSON()});
	db.set('next_id', next_id-(-1));
	db.sync();

	return true;
}

exports.clearData = () => {
	const db = new jsondb('../data/results.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	let next_id = db.get('next_id');

	for (let i = 0; i < next_id; i++){
		db.delete(i);
	}
	db.set('next_id', 0);
	
	db.sync();

	return true;
}