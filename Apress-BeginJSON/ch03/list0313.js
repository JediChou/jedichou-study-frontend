// Ref: Apress Beginning JSON
// Listing 3-13. replacing matched substring
// Jedi Chou, 2015.3.7 19:44
var str = 'hello world';
var strObj = new String(str);
var result = strObj.replace('hello', 'goodbye');
console.log(result);
console.log(strObj);
