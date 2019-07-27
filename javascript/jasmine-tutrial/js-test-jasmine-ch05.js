// File name: js-test-jasmine-ch05.js
// Description: 练习如何使用Jasmine

describe('Chapter 5. More Jasmine Features', function(){
	
	describe('5.1 Before and After', function(){
			
		// example 1
		describe('Example 1. employee', function(){
			// Jedi: Use prototype style to crate Employee
			// Employee class
			function Employee(){}
			Employee.prototype.name = "Jedi";
			Employee.prototype.role = "admin";
			
			// Test code
			var employee;
			beforeEach(function(){ employee = new Employee(); });
			it('has a name', function(){ expect(employee.name).toBeDefined();});
			it('has a role', function(){ expect(employee.role).toBeDefined();});
		});
		
		// example 2
		describe('Example 2. Calculator', function(){
			// Jedi: Use constructor method to create Calculator
			function Calculator(a, b) {
				this.a = a;
				this.b = b;
				this.add = function(a, b) {	return a+b;	};
				this.reset = function(){a=0;b=0;};
			}
			
			// Test code
			var calculator = new Calculator();
			afterEach(function(){calculator.reset()});
			it('can add two positive integers', function(){
				expect(calculator.add(5, 12)).toEqual(17);
			});
			it('can add tow negative integers', function(){
				expect(calculator.add(-5, -12)).toEqual(-17);
			});
		});
		
	});
	
	// TODO: Jedi, exercise to Nested Suites
	
});