// from MDN > Web Technology For Developers >
//   JavaScript > JavaScript reference >
//     Standard built-in objects > JSON >  JSON.stringify()

// Syntax
// JSON.stringify(value[, replacer [, space]])

var converts = [

	////////////////////////////////////////////////////////////////////////
	// class example
	JSON.stringify({ uno: 1, dos : 2 }, null, '\t'),  

	////////////////////////////////////////////////////////////////////////
	// with tab space  
	JSON.stringify({}, null, "\t"),
	JSON.stringify(true, null, "\t"),
	JSON.stringify("foo", null, "\t"),
	JSON.stringify([1,"false",false], null, "\t"),
	JSON.stringify({x:5}, null, "\t"),
	JSON.stringify({x:5, y:6}, null, "\t"),
	JSON.stringify([new Number(1), new String("false"), new Boolean(false)], null, "\t"),
	JSON.stringify({x: undefined, y:Object, z:Symbol("")}, null, "\t"),
	JSON.stringify([undefined, Object, Symbol("")], null, "\t"),

];

converts.forEach(function(element, index, array){
	console.log('======= Demo', index, '=======');
	console.log(element, '\n');
});

