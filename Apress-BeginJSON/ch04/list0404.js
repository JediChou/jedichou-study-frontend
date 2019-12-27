// Ref: Apress Beginning JSON
// Listing 4-4. 
//   creation of an object and an array via literal notation
// Jedi Chou, 2016.3.7 20:14

var objInstantion   = {};  // creation of an empty object
var arrayInstantion = [];  // creation of an empty array

//////////////////////////////
let obj = objInstantion;
let arr = arrayInstantion;
console.log(obj, typeof obj, obj instanceof Object, obj instanceof Array);
console.log(arr, typeof arr, arr instanceof Object, arr instanceof Array);