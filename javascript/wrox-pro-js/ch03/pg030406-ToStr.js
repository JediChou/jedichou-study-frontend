test('转换成字符串 - int转型成string', function() {
    age = 11;
    ageAsString = age.toString();
    equals(ageAsString, '11');
})

test('转换成字符串 - boolean转型成string', function() {
    found = true;
    foundAsString = found.toString();
    equals(foundAsString, 'true');
})

test('转换成字符串 - number转型成string', function() {
    num = 10;
    equals(num.toString(), "10");
    equals(num.toString(2), "1010");
    equals(num.toString(8), "12");
    equals(num.toString(10), "10");
    equals(num.toString(16), "a");
})

test('转换成字符串 - other转型成string', function() {
    var value3 = null;
    var value4;
    equals(String(value3), "null");
    equals(String(value4), "undefined");
})
