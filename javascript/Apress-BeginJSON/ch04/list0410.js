// Ref: Apress Beginning JSON
// Listing 4-10.
//   exmaples of json text containing a variety of valid json values
// Jedi Chou, 2016.3.7 20:32

// json text of an array with primitives
console.log([ null, true, 8]);

// json text of an object with two members
console.log({
	'first':'ben',
	'last':'smith'
});

// json text of an array with nested composites
console.log([
	{abc:123},
	['0',1,2,3,4,100]
]);

// json text of an object with nested composites
console.log({
	'object': {
		'array': [true]
	}
});
