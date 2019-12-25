test('Passing Value - 1', function() {
    function addTen(num) {
        num += 10;
        return num;
    }
    
    count = 20;
    result = addTen(count);
    
    equals(count, 20);
    equals(result, 30);
})
            
test('Passing Value - 2', function() {
    function setName(obj) {
        obj.name = "Nicholas";
    }
    
    person = new Object();
    setName(person);
    equals(person.name, "Nicholas");
})
            
test('Value passing', function() {
    function setName2(obj) {
        obj.name = "Nicholas";
        obj = new Object();
        obj.name = "Greg"; 
    }
    
    person = new Object();
    setName2(person);
    equals(person.name, "Nicholas");
})
