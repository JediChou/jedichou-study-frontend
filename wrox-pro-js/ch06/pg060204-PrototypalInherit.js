test('Ch060204 - 原型式继承', function(){
    var Person = {
        name : "Nicholas",
        friends: ["Shelby", "Court", "Van"]
    };
    
    // Create a instance
    var anotherPerson = Object(Person);
    anotherPerson.name = "Greg";
    anotherPerson.friends.push('Rob');
    
    // create other instance
    var yetAnotherPerson = Object(Person);
    yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");
    
    // test code
    var expectRS = new Array('Shelby', 'Court', 'Van', 'Rob', 'Barbie');
    equals(Person.friends.length, 5);
    for(i = 0; i < Person.friends.length; i++ ) {
        equals(Person.friends[i], expectRS[i]);
    }
})
