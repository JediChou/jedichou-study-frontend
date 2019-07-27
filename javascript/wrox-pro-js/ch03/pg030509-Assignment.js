test('assignment - Add', function() {
    num = 10;
    num += 10;
    equals(num, 20);
})

test('assignment - multiply', function() {
    num = 10;
    num *= 0.5;
    equals(num, 5);
})

test('assignment - divide', function() {
    num = 10;
    num /= 5;
    equals(num, 2);
})

test('assignment - modulus', function() {
    num = 10;
    num %= 3;
    equals(num, 1);
})

test('assignment - subtract', function() {
    num = 10;
    num -= 3;
    equals(num, 7);
})

// test('Left shift', function() {})
// test('Signed right shift', function() {})
// test('Unsigned right shift', function() {})