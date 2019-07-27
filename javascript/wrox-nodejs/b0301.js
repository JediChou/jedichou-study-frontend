var http = require('http');
var urls = [
	'shapeshed.com', 'edition.cnn.com',
	'baidu.com', '163.com'
];

function fetchPage(url) {
	var start = new Date();
	http.get({host: url}, function(res){
		console.log("Got response from: " + url);
		console.log("Request took", new Date() - start, 'ms');
	});
}

for(var i = 0; i < urls.length; i++) {
	fetchPage(urls[i]);
}