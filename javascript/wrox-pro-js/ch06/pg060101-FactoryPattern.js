test('Ch060101 - 工厂模式 - 第一种定义方式', function() {
    function createPerson(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayname = function() {
            return this.name;
        }
        return o;
    }
    
    var person1 = createPerson("Jedi", 34, "Tester");
    var person2 = createPerson("Becky", 29, "Officer");
    
    equals(person1.sayname(), "Jedi");
    equals(person2.sayname(), "Becky");
    
    // other assert
    equals(person1.age, 34);
    equals(person2.age, 29);
    equals(person1.job, 'Tester');
    equals(person2.job, 'Officer');
})
