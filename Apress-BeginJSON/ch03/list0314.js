// Ref: Apress Beginning JSON
// Listing 3-14. Extracting substring with slice
// Jedi Chou, 2016.3.7 19:58

var str = 'hello world';
var strObj = new String(str);
var index = strObj.indexOf('o');
var result = strObj.slice(0, index);
console.log(result);
console.log(strObj.slice(0, index+1));