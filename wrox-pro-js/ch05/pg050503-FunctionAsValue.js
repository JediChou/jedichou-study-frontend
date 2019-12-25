test('function as value - callSomeFunction 1', function() {
    function add10(num) {return num+10;}
    function callSomeFunction(name, para){return name(para);}
    
    result = callSomeFunction(add10, 10);
    equals(result, 20);
})

test('function as value - callSomeFunction 2', function() {
    function getGreeting(name) {return "Hello " + name;}
    function callSomeFunction(name, para){return name(para);}
    
    result = callSomeFunction(getGreeting, "Jedi");
    equals(result, "Hello Jedi");
})

test('function sort and compare - callSomeFunction 3', function() {
    function compare(propertyName) {
        return function(object1, object2) {
            value1 = object1[propertyName];
            value2 = object2[propertyName];
            
            if (value1<value2)
                return -1;
            else if (value1>value2)
                return 1;
            else
                return 0;
        };
    }
    
    data = [{name:"Zachary", age:28}, {name:"Nicholas", age:29}];
    
    data.sort(compare("name"));
    equals(data[0].name, 'Nicholas');
    
    data.sort(compare("age"));
    equals(data[0].name, 'Zachary');
})