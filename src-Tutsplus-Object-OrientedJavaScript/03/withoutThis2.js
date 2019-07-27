// file: withoutThis2.js
// date: 2019.3.27

// create an object
var otherPeople =  {
	firstName : "Jedi",
	lastName : "Chou",
	greet : function() {
		return "Hi everybody, I'm " + JediChou.firstName;
	},
};

console.log(otherPeople.greet());