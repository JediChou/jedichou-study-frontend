// File: listing1006.js
// Apress Beginning JSon, page 174
// Listing 10-6. Answer to Our JSON Exercise

var http = require('http');
var server = http.createServer(requestHandler);
	server.listen(1337);

function requestHandler(req, res) {
	if (req.url === "/message.json") {
		var body = JSON.stringify({
			message: "hello-node"
		});
	}

	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Content-Length", Buffer.byteLength(body, 'utf8'));
	res.end(body);
}

console.log("Server running at http://127.0.0.1:1337/");
