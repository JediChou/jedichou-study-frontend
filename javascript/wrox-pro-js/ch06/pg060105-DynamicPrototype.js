test('Ch060105 - 动态原型模型', function() {
    
    function Person(name, age, job) {
        
        // property
        this.name = name;
        this.age = age;
        this.job = job;
        
        // method
        if (typeof this.sayname != "function") {
            Person.prototype.sayname = function() {
                return this.name;
            }
        }
    }
    
    var person1 = new Person('Jedi', 34, 'Tester');
    equals(person1.name, 'Jedi');
    equals(person1.age, 34);
    equals(person1.job, 'Tester');
    equals(person1.sayname(), 'Jedi');
})
