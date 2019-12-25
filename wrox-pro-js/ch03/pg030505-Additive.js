test('additive - add', function() {
    equals(1+2, 3);
    ok(isNaN(1+NaN));
    equals(Infinity+Infinity, Infinity);
    equals(-Infinity+-Infinity, -Infinity);
    ok(isNaN(Infinity+-Infinity));
    equals(+0+(+0), +0);
    equals(-0+(-0), -0);
    equals(+0+(-0), +0);
    equals("a"+"b", "ab");
    equals("a"+3, "a3");
    equals(new Object("a")+"b", "ab");
    equals(true+false, 1);
    equals("a"+null, "anull");
})
            
test('additive - subtract', function() {
    ok(2-1, "2-1=1");
    ok(isNaN(Infinity-Infinity));
    ok(isNaN(-Infinity-(-Infinity)));
    equals(Infinity-(-Infinity), Infinity);
    equals(-Infinity-Infinity, -Infinity);
    equals(+0-+0,+0);
    equals(+0-(-0),-0);
    equals(-0-(-0),+0);
                
    equals("2"-1, 1);
    equals(true-1,0);
    ok(isNaN(NaN-1));
    ok(isNaN(undefined-1));
    ok(isNaN(new Object()-1));
                
    ok(5-"");
    ok(5-"2");
    ok(5-null);
})
