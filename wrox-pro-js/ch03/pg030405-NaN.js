test('NaN对象', function() {
    equals(NaN == NaN, false);
    equals(isNaN(NaN), true);
    equals(isNaN(10), false);
    equals(isNaN("10"), false );
    equals(isNaN("blue"), true);
    equals(isNaN(true), false);
})
