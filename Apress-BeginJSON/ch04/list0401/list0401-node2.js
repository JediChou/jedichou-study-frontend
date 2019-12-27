// Ref: Apress Beginning JSON
// Listing 4-1
//   Manual load json to JavaScript object.

const fs = require('fs');

var n1 = __dirname + '/n1.json'
var n2 = __dirname + '/n2.json'
var n3 = __dirname + '/n3.json'
var n1Obj = JSON.parse(fs.readFileSync(n1));
var n2Obj = JSON.parse(fs.readFileSync(n2));
var n3Obj = JSON.parse(fs.readFileSync(n3));
console.log(n1Obj, n2Obj, n3Obj);
console.log(
    typeof n1Obj, 
    typeof n2Obj, 
    typeof n3Obj
);