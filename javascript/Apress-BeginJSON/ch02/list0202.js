// Ref: Apress Beginning JSON
// Listing 2-2. Dot Notation is used to access a member from an instance
// Jedi Chou, 2016.3.7 15:29

var aCollection = new Object();
console.log(aCollection.firstProperty); // undefined
aCollection.firstProperty = 'hello world';
console.log(aCollection.firstProperty); // hello world
console.log(aCollection.toString());  // [object Object] Jedi: why?
