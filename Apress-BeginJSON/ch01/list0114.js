// Ref: Apress Beginning JSON
// Listing 1-14. Determing Data Types
// Jedi Chou, 2016.3.7 14:13
// Jedi Chou, 2019.12.27 11:34 AM

console.log(typeof 3);				// outputs number
console.log(typeof "hello world");	// outputs string
console.log(typeof true);			// outputs boolean
console.log(typeof  new Object());	// outputs object
var emptyVariable;
console.log(typeof emptyVariable);	// outpus undefined

// null, undefined 
console.log(typeof null);           // Notice: null is a object
console.log(typeof undefined);      // Notice: undefined just is undefined
console.log(typeof {});
console.log(typeof []);