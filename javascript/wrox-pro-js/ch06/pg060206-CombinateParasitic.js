test('Ch060206 - 寄生组合式继承', function(){
    
    // TODO 尚未完全理解这个部分!
    
//    // define super class
//    function SuperType(name) {
//        this.name = name;
//        this.colors = ['red','blue','green'];
//    }
//    SuperType.prototype.sayname = function() { return this.name; }
//    
//    // define sub class
//    function SubType(name, age) {
//        SuperType.call(this, name);
//        this.age = age;
//    }
//    SubType.prototype = new SuperType();
//    SubType.prototype.sayage = function() { return this.age; }
    
    // inherit method
    function inheritPrototype(subType, superType) {
        var prototype = Object(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }
    
    // define super class
    function SuperType(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green'];
    }
    SuperType.prototype.sayname = function() { return this.name; }
    
    // define sub class
    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }
    inheritPrototype(SubType, SuperType);
    SubType.prototype.sayage = function() { return this.age; }
    
    // test
    var Person = new SubType('Jedi', 34);
    equals(Person.name, 'Jedi');
    equals(Person.age, 34);
    equals(Person.sayname(), 'Jedi');
    equals(Person.sayage(), 34);
    equals(Person.colors.length, 3);
    equals(Person.colors[0], 'red');
    equals(Person.colors[1], 'blue');
    equals(Person.colors[2], 'green');
    
    // other test
    equals(Person instanceof Object, true);
    equals(Person instanceof SubType, true);
    equals(Person instanceof SuperType, true);
})
