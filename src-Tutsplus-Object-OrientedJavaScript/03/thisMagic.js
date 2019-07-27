// file: thisMagic.js
// date: 2019.3.27

var name = "Jedi Chou";
var greet = function() {
	return "Hi, everybody. My name is " + this.name;
}
console.log(greet());

// Result different:
//   under node env : Hi, everybody. My name is undefined.
//   under chrome   : Hi, everybody. My name is Jedi Chou.
//     It is mean window.name = "Jedi Chou" under browser. 
