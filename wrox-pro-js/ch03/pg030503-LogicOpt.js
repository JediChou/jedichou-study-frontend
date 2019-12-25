test('logic - not operate', function() {
    ok(!false);
    equals(!"blue", false);
    ok(!0);
    ok(!NaN);
    ok(!"");
    equals(!12345, false);
})

test('logic - multi not operate', function() {
    ok(!!"blue");
    equals(!!0, false);
    equals(!!NaN, false);
    equals(!!"", false);
    ok(!!12345);
})

test('logic - and operate', function() {
    ok(true && true);
    equals(true && false, false);
    equals(false && true, false);
    equals(false && false, false);
})

test('logic - or operate', function() {
    ok(true || true);
    equals(true || false, true);
    equals(false || true, true);
    equals(false || false, false);
})
