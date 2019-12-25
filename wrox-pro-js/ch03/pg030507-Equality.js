test('equality - == and !=', function() {
    ok(null == undefined);
    ok(!("NaN"==NaN));
    ok(!(5==NaN));
    ok(!(NaN==NaN));
    ok(NaN!=NaN);
    ok(false==0);
    ok(true==1);
    ok(!(true==2));
    ok(!(undefined==0));
    ok(!(null==0));
    ok("5"==5);
})
            
test('equality - === and !==', function() {
    ok(!("55"===55));
    ok("55"==55);
    ok(!("55" != 55));
    ok("55" !== 55);
})
