test('The Boolean Type - 1', function() {
    var falseObject = new Boolean(false);
    var result = falseObject && true;
    equals(result, true);
})

test('The Boolean Type -2', function(){
    var falseValue = false;
    result = falseValue && true;
    equals(result, false);
})

test('The Boolean Type - compare', function() {
    var falseObject = new Boolean(false);
    var falseValue = false;
    
    equals(typeof falseObject, 'object');
    equals(typeof falseValue, 'boolean');
    equals(falseObject instanceof Boolean, true);
    equals(falseValue instanceof Boolean, false);
})
