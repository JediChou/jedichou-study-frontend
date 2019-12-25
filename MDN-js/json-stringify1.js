// from MDN > Web Technology For Developers >
//   JavaScript > JavaScript reference >
//     Standard built-in objects > JSON >  JSON.stringify()

// Syntax
// JSON.stringify(value[, replacer [, space]])

var converts = [

	////////////////////////////////////////////////////////////////////////
	// simple convert
	JSON.stringify({}),
	JSON.stringify(true),
	JSON.stringify("foo"),
	JSON.stringify([1,"false",false]),
	JSON.stringify({x:5}),

	////////////////////////////////////////////////////////////////////////
	// a little complex
	JSON.stringify({x:5, y:6}),
	JSON.stringify([new Number(1), new String("false"), new Boolean(false)]),
	
	////////////////////////////////////////////////////////////////////////
	// notice
	JSON.stringify({x: undefined, y:Object, z:Symbol("")}),
	JSON.stringify([undefined, Object, Symbol("")]),

	////////////////////////////////////////////////////////////////////////
	// can not execute with node.js
	// JSON.stringify({[Symbol("foo")]: "foo"}),
	// JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")])
	// JSON.stringify({[Symbol.for("foo")]: "foo"}, function (k, v) {
  	//	if (typeof k === "symbol")
    //		return "a symbol";
	// })

];

converts.forEach(function(element, index, array){
	console.log(element, ',', typeof(element));
});

