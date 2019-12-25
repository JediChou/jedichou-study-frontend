test('Ch060107 - 稳妥构造函数模式', function() {
    
    // define Person class
    function Person(name, age, job) {
        var o = new Object();
        o.sayname = function() {
            return name;
        }
        
        return o;
    }
    
    person = new Person('Jedi', 34, 'Tester');
    equals(person.sayname(), 'Jedi');
    ok(isNaN(person.age));
    ok(isNaN(person.job));
})
