test('Ch060202 - 借用构造函数', function() {
    function SuperType() { this.colors = ['red','blue','green']; }
    function SubType() { SuperType.call(this) }; // constructor stealing
    
    var instance1 = new SubType();
    var instance2 = new SubType();
    instance1.colors.push('black');
    
    // basic assert
    ok( instance1.colors != instance2.colors );
    equals(instance1.colors.length, 4);
    equals(instance1.colors[3], 'black');
    
    // other assert
    equals(instance1 instanceof Object, true);
    equals(instance1 instanceof SuperType, false);
    equals(instance1 instanceof SubType, true);
})
