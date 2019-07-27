test('function type - normal define', function() {
    function sum(num1, num2) {
        return num1 + num2;
    }
    equals(sum(1,1), 2);
    equals(sum(1,2), 3);
})

test('function type - 2nd define', function() {
    sum = function(num1, num2) {
        return num1 + num2;
    }
    equals(sum(1,1), 2);
    equals(sum(1,2), 3);
})

// not recommended
test('function type - 3th define', function() {
    sum = new Function("num1", "num2", "return num1 + num2");
    equals(sum(1,1), 2);
    equals(sum(1,2), 3);
})

test('function type - function names is a pointer to function', function() {
    function sum(num1, num2) {
        return num1 + num2;
    }
    equals(sum(10,10), 20);
    
    anotherSum = sum;
    equals(anotherSum(10,10), 20);
    
    sum = null;
    equals(anotherSum(10,10), 20);
})
