test('shfit method', function() {
    colors = ["red", "green", "black"];
                
    equals(colors.shift(), 'red');
    equals(colors.length, 2);
    equals(colors, 'green,black');
})
            
test('unshfit method', function() {
    colors = [];
    count = colors.unshift('red', 'green');
    equals(colors.length, 2);
    equals(count, 2);
    equals(colors, 'red,green');
                
    count = colors.unshift('black');
    equals(colors.length, 3);
    equals(count, 3);
    equals(colors, 'black,red,green');  
                
    count = colors.unshift('gray');
    equals(colors.length, 4);
    equals(count, 4);
    equals(colors, 'gray,black,red,green');  
})

