test('push method', function() {
    colors = new Array();
    count = colors.push("red", "green");
    equals(colors[0], 'red');
    equals(colors[1], 'green');
    equals(count, 2);
})
            
test('pop method', function() {
    colors = ['red', 'green', 'black'];
    equals(colors.pop(), 'black');
    equals(colors.length, 2);
})
