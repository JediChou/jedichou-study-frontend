test('Object - define object & properties - 1', function() {
    var person = new Object();
    person.name = "Nicholas";
    person.age = 29;
                
    equals(person.name, "Nicholas");
    equals(person.age, 29);
})

test('Object - define object & properties - 2', function() {
    var person = {
        "name" : "Nicholas",
        "age" : 29
    };
                
    equals(person.name, "Nicholas");
    equals(person.age, 29);
})
            
test('Object - define object & properties - 3', function() {
    var person = {};
    person.name = "Nicholas";
    person.age = 29;
                
    equals(person.name, "Nicholas");
    equals(person.age, 29);
})
            
test('Object - pass params', function() {
    function displayInfo(args) {
        var output = "";
                    
        if( typeof args.name == "string")
            output += "Name:" + args.name;
        if(typeof args.age == "number") 
            output += ",Age:" + args.age;
                    
        return output;
    }
                
    // Most programmer like this method.
    equals(displayInfo({
        name:"Nicholas",
        age:29
    }), "Name:Nicholas,Age:29");
    equals(displayInfo({
        name:"Nicholas"
    }), "Name:Nicholas");
    equals(displayInfo({
        age:29
    }), ",Age:29");
    equals(displayInfo({
        names:"Nicholas",
        ages:29
    }), "");
})
            
test('Object - get properties value', function() {
    var person = new Object();
    var propertyName = "name";
    person.name = "Nicholas";
                
    equals(person["name"], "Nicholas");
    equals(person.name, "Nicholas");
    equals(person[propertyName], "Nicholas");
})
