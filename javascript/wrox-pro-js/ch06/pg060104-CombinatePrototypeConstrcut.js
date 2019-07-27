test('Ch060104 - 组合使用构造函数模式和原型模式', function() {
    
    // define Person class
    // 1. define property. (Constructor method)
    // 2. define constructor and other function. (Prototype pattern)
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ["Tom", "Jerry"];
    }
    Person.prototype = {
        constructor : Person,
        sayname : function() {
            return this.name;
        }
    }
    
    var person1 = new Person('Jedi', 34, 'Tester');
    var person2 = new Person('Jerry', 29, 'Officer');
    
    person1.friends.push("Van");
    equals(person1.friends === person2.friends, false);
    ok(person1.sayname === person2.sayname, '指向同一原型');
})

