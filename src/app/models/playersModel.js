const jsondb = require('simple-json-db');

exports.getPlayers = (id, addPop) => {
	const db = new jsondb('../data/players.json');
	if (!db.has('next_id')) {
    db.set('next_id', 0);
	}
	players = db.JSON();

	return players;
}

function check(val, arr){
	for (let i = 0; i < arr.length-1; i++){
		if (val == arr[i])
			return true;
	}
	return false;
}