// file: useBrace.js
// date: 2019.3.27

var person = {};

// Set property
person.firstName = "Jedi";
person.lastName = "Chou";

// Create a function
person.sayHi = function() {
	return "Hi there";
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.sayHi());
