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
