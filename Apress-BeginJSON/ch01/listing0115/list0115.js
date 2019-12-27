// Ref: Apress Beginning JSON
// Listing 1-15. Classifying Instances
// Jedi Chou, 2016.3.7 14:20
// Jedi Chou, fill codes and view result at Chrome. 2019.12.27 11:59 AM

var array = new Array();
var xhr = new XMLHttpRequest()

console.log( xhr instanceof Array);             // outputs false
console.log( array instanceof XMLHttpRequest);  // outputs false
console.log( array instanceof Array);           // outputs ture
console.log( xhr instanceof XMLHttpRequest);    // outputs true
console.log( xhr instanceof Object);            // outputs true
console.log( array instanceof Object);          // outputs true