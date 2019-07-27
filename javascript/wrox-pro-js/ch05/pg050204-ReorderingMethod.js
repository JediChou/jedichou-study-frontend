test('reverse method', function() {
    values = [1,2,3,4,5];
    values.reverse();
    equals(values, '5,4,3,2,1');
                
    colors = ['black', 'red', 'gray'];
    colors.reverse();
    equals(colors, 'gray,red,black');
})
            
test('sort method - non parameter', function() {
    values = [10,9,8,3,2,1];
    values.sort();
    equals(values, '1,10,2,3,8,9'); // notice!

    letters = ['c', 'b', 'a'];
    values.sort();
    equals(letters, 'c,b,a');   // notice!
})
            
// Note - this is a important feature.
test('sort method - have comparsion', function() {
    function compare(value1, value2) {
        if (value1<value2)
            return -1;
        else if (value1>value2)
            return 1;
        else
            return 0;
    }

    values = [0,5,1,10,15];
    values.sort(compare);
    equals(values, '0,1,5,10,15');
})
