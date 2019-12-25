test('function internals - 1', function() {
    // Normal
    function factorial(num) {
        if (num <= 1)
            return 1;
        else
            return num * factorial(num-1);
    }

    equals(factorial(1), 1);
    equals(factorial(2), 2);
    equals(factorial(3), 6);
    equals(factorial(4), 24);
})

test('function internals - 2', function() {
    // java special define
    function factorial(num) {
        if (num <= 1)
            return 1;
        else
            return num * arguments.callee(num-1);
    };

    equals(factorial(1), 1);
    equals(factorial(2), 2);
    equals(factorial(3), 6);
    equals(factorial(4), 24);
    
    trueFactorial = factorial;
    
    factorial = function() {
        return 0;
    };
    
    equals(trueFactorial(5), 120);
    equals(factorial(5), 0);
})