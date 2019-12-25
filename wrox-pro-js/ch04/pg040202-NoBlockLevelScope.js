test('Example 1', function() {
    if (1) var color = "blue";
    equals(color, "blue");
})
        
test('Example 2', function() {
    for(var i=0;i<10;i++) var j=1;
    equals(i, 10);
})
            
test('Example 3', function() {
    function add1(num1, num2) {
        var sum1 = num1 + num2;
        return sum1;
    }
    
    add1(1,1);
    try {
        alert(sum1);
    }
    catch (e) {
        ok(e, e.toString());
    }
})
            
test('Example 4', function() {
    function add2(num1, num2) {
        sum2 = num1 + num2;
        return sum2;
    }
    
    add2(1, 1);
    equals(sum2, 2);
})
            
test('Example 5', function() {
    var color = "blue";
    function getColor1() {
        return color;
    }
    
    equals(getColor1(), "blue");
})
            
test('Example 6', function() {
    var color = "blue";
    function getColor2() {
        var color = "red";
        return color;
    }
    
    equals(getColor2(), "red");
})
