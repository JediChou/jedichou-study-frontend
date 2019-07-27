test('Ch060102 - 工厂模式 - 第二种定义方式', function() {
    
    // class define
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayname = function() {
            return this.name;
        }
    }
    
    // create instance
    var person1 = new Person('Jedi', 34, 'Tester');
    var person2 = new Person('Becky', 29, 'Officer');
    
    // test property and method
    equals(person1.name, 'Jedi');
    equals(person1.age, 34);
    equals(person1.job, 'Tester');
    equals(person1.sayname(), 'Jedi');
    equals(person2.name, 'Becky');
    equals(person2.age, 29);
    equals(person2.job, 'Officer');
    equals(person2.sayname(), 'Becky');
})

test('Ch060102 - 工厂模式 - 第二种定义方式', function() {
    
    // class define
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayname = function() {
            return this.name;
        }
    }
    
    // create instance
    var person1 = new Person('Jedi', 34, 'Tester');
    var person2 = new Person('Becky', 29, 'Officer');
    
    // test constructor
    ok(person1.constructor == Person);
    ok(person1 instanceof Person);
    ok(person1 instanceof Object);
    ok(person2.constructor == Person);
    ok(person2 instanceof Object);
    ok(person2 instanceof Person);
    
// In the javascript, function is an object.
// ok(function(){} instanceof Object);
})

test('Ch060102 - 工厂模式 - 第三种定义方式', function() {
    
    // class define
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayname = sayname;
    }
    
    function sayname() {
        return this.name;
    }
    
    // create instance
    var person1 = new Person('Jedi', 34, 'Tester');
    var person2 = new Person('Becky', 29, 'Officer');
    
    // test property and method
    equals(person1.name, 'Jedi');
    equals(person1.age, 34);
    equals(person1.job, 'Tester');
    equals(person1.sayname(), 'Jedi');
    equals(person2.name, 'Becky');
    equals(person2.age, 29);
    equals(person2.job, 'Officer');
    equals(person2.sayname(), 'Becky');
    
    // test constructor
    ok(person1.constructor == Person);
    ok(person1 instanceof Person);
    ok(person1 instanceof Object);
    ok(person2.constructor == Person);
    ok(person2 instanceof Object);
    ok(person2 instanceof Person);
})
