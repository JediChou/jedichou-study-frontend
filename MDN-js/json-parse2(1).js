// from MDN > Web Technology For Developers >
//   JavaScript > JavaScript reference >
//     Standard built-in objects > JSON > JSON.parse()

// Syntax
// JSON.parse(text[, reviver])

// use reviver function
var result1 = JSON.parse('{"p": 5}', function(k,v){
	if (k === '') return v;
	return v * 2
});
console.log(result1);
console.log(typeof(result1));

var result2 = JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function(k,v){
	console.log('key:', k, ', val', v);
	return v;
});
