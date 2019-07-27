test('function properties and methods - lengths', function() {
    function sayName(name) { return name; }
    function sum(num1, num2) { return num1 + num2; }
    function sayHi() { return 'hi'; }
    
    equals(sayName.length, 1);
    equals(sum.length, 2);
    equals(sayHi.length, 0);
})

test('function properties and methods - apply method', function() {
    function sum(num1, num2) { return num1 + num2; }
    function callsum1(num1, num2) {
        return sum.apply(this, arguments);
    }
    function callsum2(num1, num2) {
        return sum.apply(this, [num1, num2]);
    }
    
    equals(callsum1(10,10), 20);
    equals(callsum2(10,20), 30);
})

test('function properties and methods - call method 1', function() {
    function sum(num1, num2) { return num1 + num2; }
    function callsum(num1, num2) {
        return sum.call(this, num1, num2);
    }
    
    equals(callsum(10,10), 20);
    equals(callsum(10,20), 30);
})

test('function properties and methods - call method 2', function() {
    function sayColor() { return this.color; }
    myobj = new Object();
    myobj.color = 'red';
    o = { color:'blue' };
    
    equals(sayColor.call(myobj), 'red');
    equals(sayColor.call(o), 'blue');
})