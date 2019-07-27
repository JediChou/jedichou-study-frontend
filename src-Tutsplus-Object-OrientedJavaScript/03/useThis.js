// file: useThis.js
// date: 2019.3.27

var greetReturn = ({
	firstName : "Jedi",
	lastName : "Chou",
	greet : function() {
		// notice "this" keyword
		return "Hi everybody, I'm " + this.firstName;
	},
}).greet();

console.log(greetReturn);
