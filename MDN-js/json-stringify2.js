// from MDN > Web Technology For Developers >
//   JavaScript > JavaScript reference >
//     Standard built-in objects > JSON >  JSON.stringify()

// Syntax
// JSON.stringify(value[, replacer [, space]])

var converts = [

	////////////////////////////////////////////////////////////////////////
	// with space 
	JSON.stringify({}, null, " "),
	JSON.stringify(true, null, " "),
	JSON.stringify("foo", null, " "),
	JSON.stringify([1,"false",false], null, " "),
	JSON.stringify({x:5}, null, " "),
	JSON.stringify({x:5, y:6}),
	JSON.stringify([new Number(1), new String("false"), new Boolean(false)], null, " "),
	JSON.stringify({x: undefined, y:Object, z:Symbol("")}, null, " "),
	JSON.stringify([undefined, Object, Symbol("")], null, " "),

];

converts.forEach(function(element, index, array){
	console.log('======= Demo', index, '=======');
	console.log(element, '\n');
});

