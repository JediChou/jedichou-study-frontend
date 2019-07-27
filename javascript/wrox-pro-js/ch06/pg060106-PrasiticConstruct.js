test('Ch060106 - 寄生构造函数模式', function() {
    
    // define Person class
    function Person(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayname = function() {
            return this.name;
        }
        
        return o;
    }
    
    var person1 = new Person('Jedi', 34, 'Tester');
    equals(person1.name, 'Jedi');
    equals(person1.age, 34);
    equals(person1.job, 'Tester');
    equals(person1.sayname(), 'Jedi');
})

test('Ch060106 - 寄生构造函数模式 - 为对象创建构造函数', function() {
    
    // define SpecialArray class
    function SpecialArray() {
        var values = new Array();
        values.push.apply(values, arguments);
        values.toPipedString = function() {
            return this.join("|");
        }
        
        return values;
    }
    
    var colors = new SpecialArray("red", "blue", "green");
    equals(colors.toPipedString(), "red|blue|green");
})
