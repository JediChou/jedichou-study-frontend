test('Primitive Wrapper Types - normal', function() {
    s1 = "some text";
    s2 = s1.substring(2);
    equals(s2, 'me text');
})

test('Primitive Wrapper Types - Destory', function() {
    s1 = "some text";
    s2 = s1.substring(2);
    s1 = null;
    equals(s1, null);
    equals(s2, "some text".substring(2));
})

test('Primitive Wrapper Types - string property', function() {
    s1 = "some text";
    s1.color = "red";
    equals(s1.color, undefined);
})
