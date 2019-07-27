test('Ch060201 - 原型链', function() {
    
    // Define SuperType class
    function SuperType() { this.property = true; }
    SuperType.prototype.getSuperValue = function() { return this.property; }
    
    // Define SubType class
    function SubType() { this.subproperty = false; }
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function() { return this.subproperty; }
    
    var instance = new SubType();
    
    // assert
    equals(instance.getSuperValue(), true);
    equals(instance instanceof Object, true);
    equals(instance instanceof SuperType, true);
    equals(instance instanceof SubType, true);
    
    // other assert
    equals(Object.prototype.isPrototypeOf(instance), true);
    equals(SuperType.prototype.isPrototypeOf(instance), true);
    equals(SubType.prototype.isPrototypeOf(instance), true);
})

test('Ch060201 - 原型链 - 谨慎地定义方法', function(){
    
    // Define SuperType class
    function SuperType() { this.property = true; }
    SuperType.prototype.getSuperValue = function() { return this.property; }
    
    // Define SubType class
    function SubType() { this.subproperty = false; }
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function() { return this.subproperty; }
    
    // rewrite super class method
    SubType.prototype.getSuperValue = function() { return false; }
    
    var instance = new SubType();
    equals(instance.getSubValue(), false);
    equals(instance.getSuperValue(), false);
    equals(instance instanceof Object, true);
    equals(instance instanceof SuperType, true);
    equals(instance instanceof SubType, true);
})
