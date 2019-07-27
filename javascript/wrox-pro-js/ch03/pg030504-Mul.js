// File: pg030504-Multiplication.html
// Description: Use QUnit test JavaScript features.
//   Reference by <<Professional JavaScript for Web 
//   Developers - Second Edition>> Chinese edition.
//   Page 41, and pdf 58/619

test('mul - multiplication', function () {
    equals(25*25, 625);
    ok(12*12>0);
    ok(-12*12<0);
    equals(Number.MAX_VALUE*2, Infinity);
    equals(isNaN(12*NaN), true); 
    equals(isNaN(Infinity*0), true);
    equals(Infinity*12, Infinity);
    equals(Infinity*Infinity, Infinity);
    equals('12'*'12', 144);
})

test('mul - division', function() {
    equals(66/11, 6);
    equals(66/11>0, true);
    equals(-66/11<0, true);
    //equals(1/Number.MAX_VALUE, Infinity);
    ok(isNaN(NaN/12));
    ok(isNaN(12/NaN));
    ok(isNaN(Infinity/Infinity));
    equals(Infinity/12, Infinity);
    ok(isNaN(0/0));
    equals(12/0, Infinity);
    equals(-12/0, -Infinity);
    equals(Infinity/12, Infinity);
    equals(Infinity/-12, -Infinity);
    equals('66'/11, 6);
    equals(66/'11', 6);
})

test('mul - remainder', function() {
    ok(26%5);
    ok(isNaN(1%0));
    ok(isNaN(Infinity % Infinity));
    equals(1 % (Number.MAX_VALUE * Number.MAX_VALUE), 1);
    equals(0 % 1, 0);
    equals(2 % '2', 0);
})
