// File: pg020-2.js
// Description: typeof vs instanceof

var obj = {};
var arr = ['one', 'two'];

// use typeof() to get same result
console.log(typeof obj);
console.log(typeof arr);

// use instanceof to get other result
console.log(obj instanceof Object);
console.log(arr instanceof Array);