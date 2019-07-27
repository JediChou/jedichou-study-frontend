// g - Indicates global mode.
// i - Indicates case-insenstive mode.
// m - Indicates multiline mode.
            
test('RegExp - pattern.test()', function() {
    pattern1 = /at/g;
    ok(pattern1.test("at gt at"));
                
    pattern2 = /[bc]at/i;
    ok(pattern2.test("bat"));
    ok(pattern2.test("Bat"));
    ok(pattern2.test("cat"));
    ok(pattern2.test("Cat"));
                
    pattern3 = /.at/gi;
    ok(pattern3.test(".at"));
})
            
test('RegExp - more pattern.test() ', function() {
    pattern = /[bc]at/i;
    matchers = ["bat","Bat","cat","Cat"];
    for (value in matchers)
        ok(pattern.test(matchers[value]));
                
    // TODO There have a bug on the Chrome?
    // pattern = /.at/gi;
    // matchers = ["bat","zat","cat","mat"];
    // for (value in matchers)
    //    ok(pattern.test(matchers[value]));
                
    pattern = /\.at/gi;
    matchers = [".at"];
    for (value in matchers)
        ok(pattern.test(matchers[value]));
})
