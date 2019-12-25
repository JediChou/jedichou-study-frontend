// file name: begin-node-0403.js
// description: 异步（或非阻塞）代码

var http = require('http');

function fetchPage() {
	console.log('fetching page');
	http.get({host: 'www.163.com'}, function(res){
		console.log("data returned from requesting page");
	}).on("error", function(e){
		console.log("There was an error " + e);
	});
}

function fetchApi() {
	console.log("fetching api");
	http.get({host: "sina.com"}, function(res){
		console.log("data returned from the api");
	}).on("error", function(e){
		console.log("There was an error" + e);
	}); 	
};

fetchPage();
fetchApi();