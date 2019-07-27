// File: pg025.js
// Description: == and === operator

var result1 = 1 == true;
var result2 = 1 === true;
var result3 = "" == false;
var result4 = "" === false;

// notice: == diff with ===
// ==  is mean value equal
// === is mean reference equal

console.log('1 == true: ' + result1);
console.log('1 === true: ' + result2);
console.log('"" == false: ' + result3);
console.log('"" === false: ' + result4);