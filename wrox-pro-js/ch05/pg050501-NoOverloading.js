test('func no overload - example 1', function() {
    // new func cover before
    function add(num) { return num+100;}
    function add(num) { return num+200;}
    equals(add(100), 300);
})

test('func no overload - example 2', function() {
    // same as example 1
    add = function(num) {return num+100;};
    add = function(num) {return num+200;};
    equals(add(100), 300);
})

test('func no overload - example 3', function() {
    // same as example 1
    add = new Function("num","return num+100");
    add = new Function("num","return num+200");
    equals(add(100), 300);
})
