// Ref: Apress Beginning JSON
// Listing 3-15. Extracting substring with substr
// Jedi Chou, 2016.3.7 19:58

var str = 'hello world';
var strObj = new String(str);
var startIndex = strObj.indexOf('w');
var length = (new String('world')).length;
var result = strObj.substr(startIndex, length);
console.log(result);