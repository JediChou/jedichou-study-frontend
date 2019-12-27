// Ref: Apress Beginning JSON
// Listing 4-7. 
//   the very first json message used by douglas crockford
// Jedi Chou, 2016.3.7 20:21
// Jedi Chou, add other outputs. 2019.12.27

// syntax error in ECMA 3
var firstJSON = {
	to:'session',
	do:'test',
	message:'hello world'
};
console.log(firstJSON);

// get object properties
console.log(firstJSON.to);
console.log(firstJSON.do);
console.log(firstJSON.message);

// Get object keys with Object.keys property
Object.keys(firstJSON).forEach(function(key){
	val = firstJSON[key];
	console.log(key, '->', val);
});