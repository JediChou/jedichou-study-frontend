test('Ch060203 - 组合继承', function() {
    
    // define SuperType class
    function SuperType(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green'];
    }
    SuperType.prototype.sayname = function() { return this.name; }
    
    // define SubType and bing other method.
    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }
    SubType.prototype = new SuperType();  // inherit method
    SubType.prototype.sayage = function() { return this.age; } // new method
    
    var instance1 = new SubType();
    instance1.colors.push('black');
    equals(instance1.colors[0], 'red');
    equals(instance1.colors[1], 'blue');
    equals(instance1.colors[2], 'green');
    equals(instance1.colors[3], 'black');
    ok(isNaN(instance1.colors[4]));
    
    var instance2 = new SubType("Greg", 27);
    equals(instance2.colors[0], 'red');
    equals(instance2.colors[1], 'blue');
    equals(instance2.colors[2], 'green');
    equals(instance2.sayname(), 'Greg');
    equals(instance2.sayage(), 27);
})
