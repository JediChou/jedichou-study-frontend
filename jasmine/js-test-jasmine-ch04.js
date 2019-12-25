// File name: js-test-jasmine-ch04.js
// Description: 练习如何使用Jasmine

describe('Matchers in Depth', function(){
	
	it('Equality:toEqual', function(){
		expect(true).toEqual(true);
		expect([1,2,3]).toEqual([1,2,3]);
		expect({}).toEqual({});
	});
	
	it('Identity:toBe', function(){
		var spot = {species:"Border Collie"};
		var cosmo = {species:"Border Collie"};
		expect(spot).toEqual(cosmo);
		// expect(spot).toBe(cosmo);  	// faile: not same object
		expect(spot).toBe(spot);		// success: same object
		
		var arr = [1,2,3];
		expect(arr).toEqual([1,2,3]);	// success; equivalent
		// expect(arr).toBe([1,2,3]);		// failure; not the same array
	});
	
	it('Yes or No? toBeTruthy, toBeFalsy', function(){
		// return thruth
		expect(true).toBeTruthy();
		expect(12).toBeTruthy();
		expect({}).toBeTruthy();
		
		// return false
		expect(false).toBeFalsy();
		expect(0).toBeFalsy();
		expect(null).toBeFalsy();
		expect("").toBeFalsy();
		
		// check logic operate
		var a = true && true;
		var b = false && true;
		expect(a).toEqual(true);
		expect(b).toEqual(false);
	});
	
	it('Negate Other Matchers with not', function(){
		var foo=1, bar=2; expect(foo).not.toEqual(bar);
		expect('hello planet').not.toContain('world');
	});
	
	it('Check If an Element Is Present with toContain', function(){
		// simple contain check
		expect([1,2,3,4]).toContain(3);
		expect(['penguin','turtle','pig','duck']).toContain('duck');
		
		// object contain checked
		var dog = {name:"fido"};
		expect([
			{name:'spike'},
			{name:'fido'},
			{name:'spot'}
		]).toContain(dog);
		
		// The toContain matcher also works in strings
		expect('hello world').toContain('world');
	});
	
	it('Is It Defined? toBeDefined, toBeUndenfined', function(){
		var somethingUndefined;
		expect("Hello!").toBeDefined();					// success
		expect(null).toBeDefined(); 					// success
		expect(somethingUndefined).not.toBeDefined();	// success
		
		var somethingElseUndefined;
		expect(somethingElseUndefined).toBeUndefined();	// success
		expect(12).not.toBeUndefined();
		expect(null).not.toBeUndefined();
	});
	
	it('Nullness:toBeNull', function(){
		expect(null).toBeNull();
		expect(false).not.toBeNull();
		expect(somethingElseUndefined).not.toBeNull();
	});
	
	it('Is It NaN? toBeNaN', function(){
		expect(5).not.toBeNaN();
		expect(0 / 0).toBeNaN();
		expect(parseInt("hello")).toBeNaN();
	});
	
	// TODO, page 19(28/51)
	
});