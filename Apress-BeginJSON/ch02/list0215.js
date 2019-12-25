// Ref: Apress Beginning JSON
// Listing 2-15. object literal designed with muliple key/value pairs
// Jedi Chou, 2016.3.7 17:11

var literalObject = {
	firstProperty: 'hello world',
	name: 'iObjectA',
	toString: function() {return this.name;}
};
console.log(literalObject.toString());  // iObjectA
