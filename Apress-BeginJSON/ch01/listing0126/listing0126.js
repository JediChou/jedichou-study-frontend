var name = 'ben';
var age = 36;
var sayName = function() { return this.name };  // function expression

console.log(name);
console.log(age);
console.log(sayName); // Jedi: Notice the scope of this.
console.log(sayName());