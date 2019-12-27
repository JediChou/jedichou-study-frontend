// Ref: Apress Beginning JSON
// Listing 3-3. Instantiating a string object
// Jedi Chou, 2016.3.7 19:01
var strObject = new String("test");
console.log( strObject );
for(var i in strObject)
	console.log(i + ' ' + strObject[i]);