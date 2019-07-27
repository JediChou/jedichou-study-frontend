// File: pg017.js
// Description: JavaScript object type

// define a string
var str = 'Hello, world';

// define a object, and bind str to a attribute 
var obj = new Object();
obj.str = str;
obj.num = 2.3;

// define a array object
var arr = new Array("foo", "bar", "zoo");

// define a function
var func = function() {
    console.log("I'm a function here")
}

// output their type
// notice: 22,23 line
console.log(typeof obj);  // -> object
console.log(typeof arr);  // -> object
console.log(typeof func); // -> function