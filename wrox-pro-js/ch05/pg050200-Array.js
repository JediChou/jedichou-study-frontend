test('Array - define 1', function() {
    var colors_array1 = new Array();
    var colors_array2 = new Array(20);
    var colors_array3 = new Array('red', 'blue', 'green');
                
    ok(colors_array1 instanceof Array);
    ok(colors_array2 instanceof Array);
    ok(colors_array3 instanceof Array);
})
            
test('Array - define 2', function() {
    var colors = ["red", "blue", "green"];
    var names = [];
    var values = [1,2,];
    var options = [,,,,,];
                
    ok(colors instanceof Array);
    ok(names instanceof Array);
    ok(values instanceof Array);
    ok(options instanceof Array);
})
            
test('Array - length property', function() {
    var colors = ["red", "blue", "green"];
    var names = [];
                
    equals(colors.length, 3);
    equals(names.length, 0);
})
            
test('Array - get element', function() {
    var colors = ["red", "blue", "green"];
    var names = [,];
                
    equals(colors[0], "red");
    equals(colors[1], "blue");
    equals(colors[2], "green");
    equals(names[0], undefined);
    equals(names[1], undefined);
})
            
test('Array - length increas', function() {
    var colors = ['red', 'blue', 'green'];
    colors.length = 4;
                
    equals(colors.length, 4);
    equals(colors[4], undefined);
})
            
test('Array - insert elements', function() {
    var colors_array1 = ['red', 'blue', 'green'];
    colors_array1[colors_array1.length] = 'black';
    colors_array1[colors_array1.length] = 'brown';
    equals(colors_array1[3], 'black');
    equals(colors_array1[4], 'brown');
                
    var colors_array2 = ['red', 'blue', 'green'];
    colors_array2[99] = 'black';
    equals(colors_array2[98], undefined);
    equals(colors_array2[99], 'black');
})
