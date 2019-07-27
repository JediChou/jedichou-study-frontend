// File: pg011-1.js
// Description: create a simple web server
// Execute: node pg011-1.js

var sys = require('sys');
var http = require('http');

// TODO: There has a bug
// Error message:
//   TypeError: res.sendHeader is not a function
http.createServer(function(req, res){
    setTimeout(function(){
        res.sendHeader(200, {'Content-Type': 'text/plain'});
        res.sendBody('Hello World - CoreJS pg011.js output');
        res.finish();
    });
}).listen(8000);

sys.puts('Server running at http://127.0.0.1:8000/');