test('relation - operators test', function() {
    ok(5>3);
    ok('b'>'a');
    ok('B'>'A');
    ok('12'>1);
    ok(true>false);
                
    ok('Brick'<'alphabet');
    ok('alphabet'.toLowerCase() < 'Brick'.toLowerCase());
    ok("23"<"3");
    equals("a"<3, false);
    equals("a">3, false);
})
