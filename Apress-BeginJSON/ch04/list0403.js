// Ref: Apress Beginning JSON
// Listing 4-3. 
//   using the new keyword to instantiate an object and array
// Jedi Chou, 2016.3.7 20:14

var objInstantion   = new Object();
var arrayInstantion = new Array();

////////////////////////////////////
// Other outputs
let obj = objInstantion;
let arr = arrayInstantion;
console.log(obj, typeof obj, obj instanceof Object, obj instanceof Array);
console.log(arr, typeof arr, arr instanceof Object, arr instanceof Array);