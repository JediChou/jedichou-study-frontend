load("test.js");

describe('Append: Simple test for load function', function(){
	it('Example 1: Load a variable from test.js', function(){
		expect(a).toEqual('hello');
	});
	it('Example 2: Load b variable from test.js', function(){
		expect(b).toEqual('world');
	});
	it('Example 3: Get a method return value from test.js', function(){
		expect(getStr()).toEqual('hello world');
	});
});