test('Ch0701 - 递归', function() {
    function factorial(num) {
        if(num <=1 ) return 1;
        else return num * arguments.callee(num-1);
    }
    var anotherFactorial = factorial;
    factorial = null;  // factorial被清除, 但anotherFactorial却获得了指针. <Jedi>
    
    // test
    equals(anotherFactorial(4), 24);
})
