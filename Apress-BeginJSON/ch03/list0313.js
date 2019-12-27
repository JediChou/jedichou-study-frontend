// Ref: Apress Beginning JSON
// Listing 3-13. replacing matched substring
// Jedi Chou, 2015.3.7 19:44
// Jedi Chou, add a line to explain String object special feature. 
//            2019.12.27 16:25

var str = 'hello world';
var strObj = new String(str);
var result = strObj.replace('hello', 'goodbye');
console.log(result);
console.log(strObj);  // String Object
console.log(strObj.toString());  // String Object's toString method executed result