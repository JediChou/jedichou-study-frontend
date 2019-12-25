
test('Array - toString(), valueOf()', function() {
    colors = ['red', 'blue', 'green'];
    equals(colors.toString(), "red,blue,green");
    equals(colors.valueOf(), "red,blue,green");
    equals(colors, "red,blue,green");
})
            
test('Array - toLocaleString()', function() {
    person1 = {
        toLocaleString : function() {
            return 'Nikolaos';
        },
        toString : function() {
            return 'Nicholas';
        }
    };
                
    person2 = {
        toLocaleString : function() {
            return 'Grigorios';
        },
        toString : function() {
            return 'Greg';
        }
    };
                
    people = [person1, person2];
    equals(people, 'Nicholas,Greg');
    equals(people.toString(), 'Nicholas,Greg');
    equals(people.toLocaleString(), 'Nikolaos,Grigorios');
})
            
test('Array - jion()', function() {
    colors = ['red', 'green', 'blue'];
    equals(colors.join("."), "red.green.blue");
    equals(colors.join("||"), "red||green||blue");
})

