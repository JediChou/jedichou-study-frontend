test('Ch0703 - 模仿块级作用域 - 临时变量未销毁', function(){
    var expect = new Array(0,1,2,3,4,5,6,7,8,9);
    function outputNums(count) {
        for(var i=0; i<count; i++) {
            equals(i, expect[i]);
        }
        equals(i, 10, '虽然跳出循环, 但i未销毁');
    }
    
    outputNums(10);
})

test('Ch0703 - 模仿块级作用域 - 重新申明也不会销毁', function(){
    var expect = new Array(0,1,2,3,4,5,6,7,8,9);
    function outputNums(count) {
        for(var i=0; i<count; i++) {
            equals(i, expect[i]);
        }
        var i;
        equals(i, 10);
    }
    
    outputNums(10);
})

test('Ch0703 - 模仿块级作用域 - 正确的写法', function(){
    var expect = new Array(0,1,2,3,4,5,6,7,8,9);
    function outputNums(count) {
        (function() {
            for(var i=0; i<count; i++) {
                equals(i, expect[i]);
            }
        })();
        
        // notice i is not define after use ()();
        ok(typeof(i) == 'undefined');
    }
    
    outputNums(10);
})
