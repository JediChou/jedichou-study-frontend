// file: personFactory.js
// date: 2019.3.27
// Jedi: simple and clear.

var personFactory = function(firstName, lastName){
	return {
		firstName : firstName,
		lastName : lastName,
		sayHi : function() {
			return "Hi there";
		},
	};
};

var lin = personFactory("HaiHong", "Lin");
var jedi = personFactory("Jedi", "Chou");
var rain = personFactory("Rain", "Jiang");

[lin, jedi, rain].forEach(function (person){
	console.log([
		person.firstName, 
		person.lastName, 
		person.sayHi()].join(" ")
	);
});
