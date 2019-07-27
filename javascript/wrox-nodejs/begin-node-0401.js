var fs = require('fs');
var http = require('http');

http.get({host: 'www.163.com'}, function(res){
	console.log("Got a response from 163.com");
}).on('error', function(e){
	Console.log("There was an error from 163.com");
});

fs.readFile('file1.txt', 'utf8', function(err, data){
	if(err) throw err;
	console.log('File 1 read!');
});

http.get({host: 'sina.com'}, function(res){
	console.log("Got a response from sina.com");
}).on('error', function(e){
	Console.log("There was an error from sina.com");
});

fs.readFile('file2.txt', 'utf8', function(err, data){
	if(err) throw err;
	console.log('File 2 read!');
});