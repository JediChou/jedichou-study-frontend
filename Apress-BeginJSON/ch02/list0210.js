// Ref: Apress Beginning JSON
// Listing 2-10. Move assignment of instance creation
// Jedi Chou, 2016.3.7 16:53

var externalObject = new Object();

var internalObject = new Array();
	internalObject[0] = 'sunday';
	internalObject[1] = 'monday';
	internalObject[2] = 'tuesday';
	externalObject.child = internalObject;

// outputs our array as expected
console.log(externalObject.child);

// Jedi add other comments
console.log(typeof externalObject.child);
console.log(externalObject.child instanceof Array);
console.log(externalObject.child.length);
console.log(externalObject.child[0]);
console.log(externalObject.child[1]);
console.log(externalObject.child[2]);
console.log(externalObject.child.toString());