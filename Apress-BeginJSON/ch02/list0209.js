// Ref: Apress Beginning JSON
// Listing 2-9. undefined assignment of internalObject
// Jedi Chou, 2016.3.7 16:49

var externalObject = new Object();
	externalObject.child = internalObject;

var internalObject = new Array();
	internalObject[0] = 'sunday';
	internalObject[1] = 'monday';
	internalObject[2] = 'tuesday';

// outputs undefined, 无法后绑定
console.log(externalObject.child);
