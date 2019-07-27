// File: pg018.js
// Description: Convert basic type to object type.

var str = 'JavaScript Kernal';
console.log(str.length);
console.log(typeof str);
console.log('\n');

/////////////////////////////////////////////////
// Notice: str2 is a object.
/////////////////////////////////////////////////

// It is mean str do not equal str2.
// One's type is a basic type.
// The other's type is a object type.
var str2 = new String("JavaScript Kernal");
console.log(str2);
console.log(typeof str2);