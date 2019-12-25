test('Single Plus', function() {
    s1 = "2";
    s2 = "z";
    b = false;
    f = 1.1;
    o = {
        valueOf: function() {
            return -1;
        }
    }

    equals(s1++, 2);
    ok(isNaN(s2++));
    equals(b++, 0);
    equals(f--, 1.1);
    equals(o--, -1);
})
