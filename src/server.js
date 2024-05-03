const port = require('./conf').port;
const server = require('http').createServer(require('./app'));

// Start server
server.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});