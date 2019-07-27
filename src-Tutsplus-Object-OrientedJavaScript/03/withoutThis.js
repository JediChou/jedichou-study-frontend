// file: withoutThis.js
// date: 2019.3.27

// create an object
var JediChou =  {
	firstName : "Jedi",
	lastName : "Chou",
	greet : function() {
		return "Hi everybody, I'm " + JediChou.firstName;
	},
};

// use object's behavior
console.log(JediChou.greet());