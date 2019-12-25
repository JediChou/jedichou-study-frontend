// File name: js-test-jasmine-ch02.js
// Description: 练习如何使用Jasmine

describe('Testing Existing Code with describe, it, and, expect', function(){
	// An Example to Test
	// Jedi: 准备被测试的函数
	function helloworld(){ return "Hello World";}
	it('Jasmine Time!', function(){
		expect(helloworld()).toEqual("Hello World");
	});
});

describe('Writing the Test First with Test-Driven Development', function(){
	// what does our disemvoweler do
	// * it should remove all lowcase vowels
	// * it should remove all uppercase vowels
	// * it shouldn't change empty strings.
	// * it shouldn't change strings with no vowels
	
	describe('Disemvoweler', function(){
		
		// want to be test
		function disemvowel(str) {
			return str.replace(/a|e|i|o|u/gi, "");
		}
		
		it('Example 1: should remove all lowcase vowels', function(){
			expect(disemvowel("Hello world")).toEqual("Hll wrld");
		});
		
		it('Example 2: should romove all uppercase vowels', function(){
			expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
		});
		
		it('Example 3: shouldn\'t change empty strings', function(){
			expect(disemvowel("")).toEqual("");
		});
		
		it('Example 4: shouldn\'t change string with no vowels', function(){
			expect(disemvowel("Mhmm")).toEqual("Mhmm");
		});
		
	});
});