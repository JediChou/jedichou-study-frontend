test('bit - Not Operate', function() {
    equals(~25, -26);
})

test('bit - And Operate', function() {
    equals(25 & 3, 1);
})

test('bit - Or Operate', function() {
    equals(25 | 3, 27);
})

test('bit - Xor Operate', function() {
    equals(25 ^ 3, 26);
})

test('bit - move left', function() {
    equals(2 << 5, 64);
})

test('bit - move right', function() {
    equals(64 >> 2, 16);
})
