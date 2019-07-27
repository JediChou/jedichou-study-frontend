// Ref: Apress Beginning JSON
// Listing 2-3. Bracket Notation is used to access a member from an instance
// Jedi Chou, 2016.3.7, 15:36

var aCollection = new Object();
console.log(aCollection['firstProperty']);  // undefined
aCollection['firstProperty'] = 'hello world';
console.log(aCollection['firstProperty']);  // hello world
console.log(aCollection.toString());		// [object Object]
