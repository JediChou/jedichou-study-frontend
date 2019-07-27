// File: pg024-1.js
// Description: [] operator
var arr = ['one', 'two', 'three', 'four'];

// get element by index
console.log(arr[0]);

// use forEach
console.log("////////////////////");
arr.forEach(function(elt){
    console.log(elt);
});

// use each
console.log("////////////////////");
arr.map(function(elt){
    console.log(elt);
});
