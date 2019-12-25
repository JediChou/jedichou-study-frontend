test('Ch0702 - 闭包 - 基本概念', function(){

    // TODO 概念有些混乱不清
    function createComparisonFunction(propertyName) {
        return function(object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];
            
            if(value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0
            }
        };
    }
    
    var compare = createComparisonFunction("name");
    equals(compare({name:'Becky'}, {name:'Jedi'}), -1);
    equals(compare({name:'Nicholas'}, {name:'Greg'}), 1);
    equals(compare({name:'Jedi'}, {name:'Jedi'}), 0);
})

test('Ch0702 - 闭包 - 基本概念其他例子', function() {
    function compare(value1, value2) {
        if(value1 < value2)
            return -1;
        else if(value1 > value2)
            return 1;
        else
            return 0;
    }

    equals(compare(1, 2), -1);
    equals(compare(2, 1), 1);
    equals(compare(1, 1), 0);
})
