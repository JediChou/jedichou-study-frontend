test('The number type - 1', function() {
    var num = 10;
    equals(num.toString(), '10');
    equals(num.toString(2), '1010');
    equals(num.toString(8), '12');
    equals(num.toString(10), '10');
    equals(num.toString(16), 'a');
    // equals(num.toString(16), 'A'); // you will get a error
})

test('The number type - toFixed', function() {
    num1 = 10;
    equals(num1.toFixed(2), '10.00');
    
    num2 = 10.005;
    equals(num2.toFixed(2), '10.01');
})

test('The number type - toPrecision', function() {
    num = 99;
    equals(num.toExponential(1), '9.9e+1');     // google chrome 16.0.912.77 m
    equals(num.toExponential(2), '9.90e+1');    // google chrome 16.0.912.77 m
    equals(num.toExponential(3), '9.900e+1');   // google chrome 16.0.912.77 m
})

test('The number type - compare', function() {
    var numberObject = new Number(10);
    var numberValue = 10;
    
    equals(typeof numberObject, 'object');
    equals(typeof numberValue, 'number');
    equals(numberObject instanceof Number, true);
    equals(numberValue instanceof Number, false);
})
