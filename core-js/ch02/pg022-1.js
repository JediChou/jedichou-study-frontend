// File: pg022-1.js
// Description: JavaScript reference type

var arr = [1,2,3,4,5];
var arrRef = arr;  // this is like a pointer

arr.push(6);
console.log(arrRef);