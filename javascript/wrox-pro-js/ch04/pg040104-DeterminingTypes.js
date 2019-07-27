test('typeof method', function() {
    s = "Nicholas";
    b = true;
    i = 22;
    n = null;
    o = new Object();
                
    equals(typeof s, "string");
    equals(typeof b, "boolean");
    equals(typeof i, "number");
    equals(typeof n, "object");
    equals(typeof o, "object");
})
            
test('instanceof method', function() {
    person = new Object();
    colors = ['red','blue','grey'];
    reg = /\[bc\]at/i;
                
    ok(person instanceof Object);
    ok(colors instanceof Array);
    ok(reg instanceof RegExp);
})

