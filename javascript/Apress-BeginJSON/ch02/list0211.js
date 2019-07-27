// Ref: Apress Beginning JSON
// Listing 2-11. Recording of instantiations
// Jedi Chou, 2016.3.7 16:54

var internalObject = new Array();
	internalObject[0] = 'sunday';
	internalObject[1] = 'monday';
	internalObject[2] = 'tuesday';

var externalObject = new Object();
	externalObject.child = internalObject;

// outputs our array as expected
console.log(externalObject.child);
