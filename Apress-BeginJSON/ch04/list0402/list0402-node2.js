// Ref: Apress Beginning JSON
// Listing 4-2. 
//   Manual loads Array objects from JSON file.

const fs = require('fs');

var n1 = __dirname + '/n1.json'
var n2 = __dirname + '/n2.json'
var n3 = __dirname + '/n3.json'
var arr = [
    JSON.parse(fs.readFileSync(n1)),
    JSON.parse(fs.readFileSync(n2)),
    JSON.parse(fs.readFileSync(n3))];

arr.forEach(elt => {
    console.log(elt, typeof elt, elt instanceof Array);
});