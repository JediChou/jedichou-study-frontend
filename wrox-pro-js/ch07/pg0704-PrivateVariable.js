test('Ch0704 - 私有变量 - 最简示例', function(){
    function add(num1, num2) {
        var sum = num1 + num2;
        return sum;
    }
    equals(add(1,1), 2);
    equals(add(1,3), 4);
    equals(add(1,4), 5);
})

test('Ch0704 - 私有变量 - 基本模式', function(){
    function MyObject() {
        var privateVariable = 10;
        function privateFunction() {
            return false;
        }
        function getPrivateVariable() {
            return privateVariable;
        }
        this.publicGetPrivateFunction = function(){
            return privateFunction();
        }
        this.publicGetPrivateVariable = function(){
            privateVariable++;
            return getPrivateVariable();
        }
    }
    
    var testobj = new MyObject();
    equals(typeof(testobj.privateVariable), 'undefined');
    equals(typeof(testobj.privateFunction), 'undefined');
    equals(typeof(testobj.getPrivateVarible), 'undefined');
    equals(testobj.publicGetPrivateVariable(), 11);
    equals(testobj.publicGetPrivateFunction(), false);
})

test('Ch0704 - 私有变量 - 其他例子', function(){
    
    // we will simulate a property
    function Person(name) {
        this.getname = function() { return name; };
        this.setname = function(value) { name = value };
    }
    
    var mutants = new Person('Carlos');
    equals(mutants.getname(), 'Carlos');
    mutants.setname('nado');
    equals(mutants.getname(), 'nado');
})
