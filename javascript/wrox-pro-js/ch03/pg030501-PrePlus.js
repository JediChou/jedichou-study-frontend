test('Pre plus', function() {
    s1 = "01";
    s2 = "1.1";
    s3 = "z";
    b = false;
    f = 1.1;
    o = {
        valueOf: function() {
            return -1;
        }
    }
            
    s1 = +s1;
    s2 = +s2;
    s3 = +s3;
    b = +b;
    f = +f;
    o = +o;
            
    equals(s1, 1);
    equals(s2, 1.1);
    ok(isNaN(s3));
    equals(b, 0);
    equals(f, 1.1);
    equals(o, -1);
})
