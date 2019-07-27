test('Ch070201 - 闭包与变量 - 未理解闭包概念的例子', function() {
    
    // define a methd and closure
    function createFunctions() {
        var result = new Array();
        for (var i=0; i<10; i++) {
            result[i] = function() {
                return i;
            };
        }
        return result;
    }
    var funcs = createFunctions();
    
    // use it to test.
    for(var i=0; i<funcs.length; i++) {
        // equals(funcs[i](), i);
        equals(funcs[i]() != i, true, '并不与传统的概念一致');
    }
})

test('Ch070201 - 闭包与变量 - 成功的例子', function() {
    // define a methd and closure
    function createFunctions() {
        var result = new Array();
        for (var i=0; i<10; i++) {
            result[i] = function(num) {
                return function() {
                    return num;
                };
            }(i);
        }
        return result;
    }
    var funcs = createFunctions();
    
    // use it to test.
    for(var i=0; i<funcs.length; i++) {
        equals(funcs[i](), i);
    }    
})
