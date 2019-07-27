// File name: oreilly-ds-and-algorithms-withjs-ch1.js
// Focus at Chapter 1
//   Chapter 1. The JavaScript Programming Enviroment and Model

describe('Ch01, The JavaScript Programming Enviroment and Model', function(){
	describe('1.1 The JavaScript Enviroment', function(){});
	describe('1.2 JavaScript Programming Practices', function(){
		describe('1.2.1 Declaring and Intializing Variables', function(){
			it('Example 1-1. Arithmetic and math functions in JavasScript', function(){
				var x = 3, y = 1.1, z = 9;
				expect(x+y).toEqual(4.1);
				expect(x*y).toEqual(3.3000000000000003);  // Jedi: notice this feature
				expect((x+y)*(x-y)).toEqual(7.789999999999999);
				expect(Math.sqrt(z)).toEqual(3);
				expect(Math.abs(x/y)).toEqual(2.727272727272727);
				z = x*y;
				expect(z.toFixed(2)).toEqual('3.30');  // Jedi
			});
		});
		describe('1.2.2 Arithmetic and Math Library Functions in Javascript', function(){});
		describe('1.2.3 Decision Constructs', function(){});
		describe('1.2.4 Repetition Constructs', function(){});
		describe('1.2.5 Functions', function(){});
		describe('1.2.6 Variable Scope', function(){});
		describe('1.2.7 Recurison', function(){});
	});
	describe('1.3 Object and Object-Oriented Programming', function(){});
	describe('1.4 Summary', function(){});
});