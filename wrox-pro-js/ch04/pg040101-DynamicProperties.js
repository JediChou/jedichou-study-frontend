test('Dynamic Properties', function() {
    person = new Object();
    person.name = "Nicholas";
    equals(person.name, "Nicholas");
})
            
test('Basic type can not add properties', function() {
    name = "Nicholas";
    name.age = 27;
    equals(name.age, undefined);
})
