test('Simple copy', function() {
    num1 = 5;
    num2 = num1;
    equals(num2, 5);
})
            
test('Object copy', function() {
    obj1 = new Object();
    obj2 = obj1;
    
    obj1.name = "Nicholas";
    equals(obj2.name, "Nicholas");
})
