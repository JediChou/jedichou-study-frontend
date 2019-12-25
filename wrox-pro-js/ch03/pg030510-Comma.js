test('comma - 1', function() {
    num1=1, num2=2, num3=3;
    equals(num1, 1);
    equals(num2, 2);
    equals(num3, 3);
})
            
test('comma - 2', function() {
    num = (5,1,4,8,0);
    equals(num, 0);
})
