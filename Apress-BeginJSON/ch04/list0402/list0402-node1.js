// Ref: Apress Beginning JSON
// Listing 4-2. 
//   Loads Array objects from JSON file.

var n1 = require('./n1.json')
var n2 = require('./n2.json')
var n3 = require('./n3.json')

console.log(n1, typeof n1, n1 instanceof Array);
console.log(n2, typeof n2, n2 instanceof Array);
console.log(n3, typeof n3, n3 instanceof Array);