// Ref: Apress Beginning JSON
// Listing 3-6. Iterating through a string's characters
// Jedi Chou, 2016.3.7 19:25
var str = 'hello world';
var strObj = new String(str);
var length = strObj.length;
for(var i=0; i<length; i++)
	console.log(strObj[i]);
