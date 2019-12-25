// File name: js-test-jasmine-ch03.js
// Description: 练习如何使用Jasmine

describe('Test Components', function(){
	
	// want to test
	function Calc() {
		this.add = function(a, b){return a+b;}
		this.sub = function(a, b){return a-b;}
		this.mul = function(a, b){return a*b;}
		this.div = function(a, b){return a%b;}
	}
	
	describe('calculator addition', function(){
		it('1. calculator addition - can add, substract, multiply,\
			and divide positive integers', function(){
			var c = new Calc();
			expect(c.add(2,3)).toEqual(5);
			expect(c.sub(3,2)).toEqual(1);
			expect(c.mul(2,3)).toEqual(6);
			expect(c.div(3,2)).toEqual(1);
		});
		
		describe('2. calculation addition', function(){
			var calc;
			
			// like setup method  
			beforeEach(function(){
				calc = new Calc();
			});
			
			it('2.1 can add positive integers', function(){
				expect(calc.add(2,3)).toEqual(5);
			});
			
			it('2.2 can subtract positive integers', function(){
				expect(calc.sub(8,5)).toEqual(3);
			});
			
			it('2.3 can multiply positive integers', function(){
				expect(calc.mul(3,4)).toEqual(12);
			});
			
			it('2.4 can divide positive integers', function(){
				expect(calc.div(3,2)).toEqual(1);
			});
		});
	});
	
	describe('Black-Box Testing', function(){
		// want to test
		// jedi: 直接定义一个对象, 方法直接就写出来, 后面直接用
		var person = {
			// private method
			_generateHello : function(){
				return 'hello';
			},
			// public method
			helloworld: function(){
				return this._generateHello() + " world";
			}
		};
		
		it('Test class', function(){
			expect(person.helloworld()).toEqual('hello world');
			//console.log(person);
		});
	});
	
});