test('类型转换 - Number', function() {
    ok(isNaN(Number("Hello world!")));
    equals(Number(""), 0);
    equals(Number("000011"), 11);
    equals(Number(true), 1);
})

test('类型转换 - parseInt()', function() {
    equals(parseInt("1234blue"), 1234);
    equals(isNaN(parseInt("")), true) ;
    equals(parseInt("0xA"), 10);
    equals(parseInt(22.5), 22);
    equals(parseInt("070"), 56);
    equals(parseInt("70"), 70);
    equals(parseInt("0xf"), 15);
})

test('类型转换 - recover_parseOther', function() {
    equals(parseInt("AF", 16), 175);
    ok(isNaN(parseInt("AF")));
})

test('类型转换 - recover_parseInt_BaseParameter', function() {
    equals(parseInt("10", 2), 2);
    equals(parseInt("10", 8), 8);
    equals(parseInt("10", 10), 10);
    equals(parseInt("10", 16), 16);
})

test('类型转换 - recover_parseFloat', function() {
    equals(parseFloat("1234blue"), 1234.0);
    equals(parseFloat("0xA"), 0);
    equals(parseFloat("22.5"), 22.5);
    equals(parseFloat("22.34.5"), 22.34);
    equals(parseFloat("0908.5"), 908.5);
    equals(parseFloat("3.125e7"), 31250000);
})
