// Apress Beginning JSON
// Listing 10-1. Extremely Basic Node Server

var http = require('http');
var server = http.createServer();
	server.addListener('request', requestHandler);
	server.listen(1337, '127.0.0.1');

function requestHandler(request, response) {
	console.log(request.url);
	console.log(request.headers);
	var body = "Hello NodeJS";
	response.statusCode = 200;
	response.setHeader("Content-Type", "text/plain");
	response.setHeader("Content-Length", Buffer.byteLength(body, 'utf8'));
	response.end(body);
};

console.log("Server running at http://localhost:1337");
