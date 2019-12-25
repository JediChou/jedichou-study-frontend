// File name: js-test-jasmine-ch04.js
// Description: 练习如何使用Jasmine

// For "Custom Matchers"
/*
beforeEach(function(){
	this.addMachers({
		toBeLarge: function(){
			this.message = function(){
				return "Expected " + this.actual + " to be large";
			};
			return this.actual > 100;
		}
	});
});
*/

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
		// expect(false).toBeNull();					// failure
		// expect(somethingElseUndefined).toBeNull();	// failure
	});
	
	it('Is It NaN? toBeNaN', function(){
		expect(5).not.toBeNaN();
		expect(0 / 0).toBeNaN();
		expect(parseInt("hello")).toBeNaN();
	});
	
	it('Comparator:toBeGreaterThan, toBeLessThan', function(){
		expect(8).toBeGreaterThan(5);
		expect(5).toBeLessThan(12);
		expect("a").toBeLessThan("z");
	});
	
	it('Nearness:toBeCloseTo', function(){
		expect(12.34).toBeCloseTo(12.3, 1);
		
		// failure
		// expect(12.34).toBeCloseTo(12.3, 2);
		// expect(12.34).toBeCloseTo(12.3, 3);
		// expect(12.34).toBeCloseTo(12.3, 4);
		// expect(12.34).toBeCloseTo(12.3, 5);
		
		// success
		expect(12.3456789).toBeCloseTo(12, 0);
		expect(500).toBeCloseTo(500.087315, 0);
		expect(500.087315).toBeCloseTo(500, 0);
	});
	
	it('Uising toMatch with Regular Expressions', function(){
		expect('foo bar').toMatch(/bar/);
		expect('hourse_ebooks.jpg').toMatch(/\w+.(jpg|gif|png|svg)/i);
		
		// TODO: Jedi, need to fix
		// expect('jasmine@example.com').toMatch('\w+@\w+\.\w+');
	});
	
	it('Checking if a Function Throws an Error with toThrow', function(){
		var throwMeAnError = function() {
			throw new Error();
		};
		expect(throwMeAnError).toThrow();
	});
	
	// TODO: Jedi, need to fix.
	//it('Custom Matchers', function(){
	//	expect(5).toBeLarge();
	//});
	
	
	
});