test('Ch070202 - 关于this对象 - 匿名函数全局性的不明显特性', function(){
    var name = "The Windows";
    var object = {
        name : 'My Object',
        getnamefunc : function() {
            return function(){
                return this.name;
            };
        }
    };
    
    ok(object.getnamefunc() != name);
})

test('Ch070202 - 关于this对象 - 正确的写法', function(){
    var name = 'The Window';
    var object = {
        name : 'My Object',
        getnamefunc : function(){
            var that = this;
            return function(){
                return that.name;
            };
        }
    };
    
    equals(object.getnamefunc()(), 'My Object');
})
