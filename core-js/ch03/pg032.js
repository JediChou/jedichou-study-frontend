// File: pg032.js
// Description: use this in the context

// two objects
var jack = { name: 'jack', age: 26};
var abbz = { name: 'abbz', age: 27};

// global func
function printName() { return this.name; }

// output
console.log(printName.call(jack));
console.log(printName.call(abbz));