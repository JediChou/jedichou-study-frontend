// Ref: Apress Beginning JSON
// Listing 2-7.
//   Demonstrating the String Representation of an array
// Jedi Chou, 2016.3.7 15:52

var orderedCollection = new Array();
	orderedCollection[0] = 'sunday';
	orderedCollection[1] = 'monday';
	orderedCollection[2] = 'tuesday';
console.log(orderedCollection.toString())
console.log(orderedCollection.join(','))