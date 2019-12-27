// Ref: Apress Beginning JSON
// Listing 1-26. Declaring Three Variables
// Jedi Chou, 2016.3.7 15:07

var name = 'ben';
var age = 36;
var sayName = function() { return this.name };  // function expression

console.log(name);
console.log(age);
console.log(sayName); // Jedi: Notice the scope of this.

console.log(sayName());

////////////////////////////////////////////////////////////
// sayName is function
// At node ENV, sayName value is [Function: sayName]
// At browser ENV, sayName value is ƒ(){ return this.name }

////////////////////////////////////////////////////////////
// At node ENV, sayName() return undefined
//   Because the scope will un-defined name variable or
//   property.
//
// At Chrome ENV, sayName() return 'ben'
//   Because the global object is window, when you defined
//   name, then window.name bind your define variable. It is
//   mean window.name equal this.name.