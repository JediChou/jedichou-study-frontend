test('Ch070401 - 静态私有变量', function(){
    (function(){
        var name = '';

        Person = function(value) {
            name = value;
        };

        Person.prototype.getname = function(){
            return name;
        };
        
        Person.prototype.setname = function(value){
            name = value;
        }
    })();
    
    var person1 = new Person('Bing');
    equals(person1.getname(), 'Bing');
    person1.setname('Mei');
    equals(person1.getname(), 'Mei');
    
    var person2 = new Person('Fang');
    equals(person2.getname(), 'Fang');
    ok(person1.getname() == person2.getname(), '实现了静态私有变量');
})
