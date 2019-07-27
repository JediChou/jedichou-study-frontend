// Ref: Apress Beginning JSON
// Listing 2-12. Object Literal are created as they are evaluated
// Jedi Chou, 2016.3.7 16:57

var externalObject = {
	child: ['sunday', 'monday', 'tuesday']
};
console.log(externalObject.child);		// outputs our array as expected
console.log(externalObject.toString());	// [object Object]
