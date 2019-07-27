// File: List0206.ts
// Ref: Apress Pro TypeScript
// Listing 2-6. Best common type premise

var bestCommonTypeExample = [
	{a: 'A', b: 1, c: true}
];

for (var i=0; i < bestCommonTypeExample.length; i++) {
	var value = bestCommonTypeExample[i];
	console.log(value.a);
	console.log(value.b);
	console.log(value.c);
}

