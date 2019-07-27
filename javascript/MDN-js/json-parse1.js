// from MDN > Web Technology For Developers >
//   JavaScript > JavaScript reference >
//     Standard built-in objects > JSON > JSON.parse()

// Syntax
// JSON.parse(text[, reviver])

// simple example
var jsonArr = [
	JSON.parse('{}'),
	JSON.parse('true'),
	JSON.parse('"foo"'),
	JSON.parse('[1,5,"false"]'),
	JSON.parse('null')
];

jsonArr.forEach(function(element,index,array){
	console.log(element);
});
