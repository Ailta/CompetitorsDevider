function removePlayer(id) {
	console.log('removingPlayer');
	
	console.log(id);
	
	fetch('/removePlayer', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		  },
		body: JSON.stringify({ "playerId": id })
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if (data){
			location.reload();
		}
	})
	.catch(error => {
		console.error('Error:', error);
	});
}

function addPlayer() {
	console.log('addingPlayer');
	
	let playerName = document.getElementById('playerName').value;
	
	console.log(playerName);
	
	fetch('/addPlayer', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		  },
		body: JSON.stringify({ playerName })
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if (data){
			location.reload();
		}
	})
	.catch(error => {
		console.error('Error:', error);
	});
}

function startRound() {
	fetch('/startRound', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		  },
		body: JSON.stringify({ "startRound": true })
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if (data){
			location.reload();
		}
	})
	.catch(error => {
		console.error('Error:', error);
	});
}

function changeState(id, competitor) {
	console.log('changingState');
	
	console.log(id);
	
	fetch('/changeState', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		  },
		body: JSON.stringify({ "playerId": id, "competitorId": competitor })
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if (data){
			location.reload();
		}
	})
	.catch(error => {
		console.error('Error:', error);
	});
}

function saveRound() {
	console.log('savingRound');
	
	let nameOfSave = document.getElementById('saveName').value;
	
	fetch('/saveRound', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		  },
		body: JSON.stringify({ nameOfSave })
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if (data){
			location.reload();
		}
	})
	.catch(error => {
		console.error('Error:', error);
	});
}
