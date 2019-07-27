test('Ch060205 - 寄生式继承', function(){
    // define a parasitic method
    function createAnother(original) {
        var clone = Object(original);
        clone.sayhi = function() { return "hi"; }
        clone.sayage = function() { return 34; }
        
        return clone;
    }
    
    // define a class
    var Person = {
        name : "Jedi",
        friends : ['Bing', 'Mei', 'Fang']
    };
    
    // inherit class
    var anotherPerson = createAnother(Person);
    
    // test
    equals(anotherPerson.sayhi(), 'hi');
    equals(anotherPerson.sayage(), 34);
})
