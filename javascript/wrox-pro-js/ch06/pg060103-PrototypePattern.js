test('Ch060103 - 原型模式', function() {
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayname = function() {
        return (this.name);
    }
    
    var person1 = new Person();
    var person2 = new Person();
    
    ok(person1.sayname() == person2.sayname());
    ok(Person.prototype.isPrototypeOf(person1));
    ok(Person.prototype.isPrototypeOf(person2));
})

test('Ch060103 - 原型模式 - 实例属性', function() {
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayname = function() {
        return (this.name);
    }
    
    var person1 = new Person();
    var person2 = new Person();

    person1.name = 'Jedi';
    equals(person1.name, 'Jedi');
    equals(person2.name, 'Nicholas');
    
    delete person1.name;
    equals(person1.name, 'Nicholas');
})

test('Ch060103 - 原型模式 - 检查属性是否来自原型', function() {
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayname = function() {
        return (this.name);
    }
    
    var person1 = new Person();
    
    // name is from prototype
    equals(person1.hasOwnProperty("name"), false, '属性来至原型');
    
    // name is from instance
    person1.name = 'Jedi';
    equals(person1.hasOwnProperty("name"), true, '属性来自实例');
    
    // to default value
    delete person1.name;
    equals(person1.hasOwnProperty("name"), false, '删除实例的属性后');
})

test('Ch060103 - 原型模式 - in操作符', function() {
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayname = function() {
        return (this.name);
    }
    
    var person1 = new Person();
    
    // compare hasOwnProperty with in operation
    equals(person1.hasOwnProperty("name"), false);
    equals("name" in person1, true);
    
    // after use instance property.
    person1.name = 'Jedi';
    equals(person1.hasOwnProperty("name"), true);
    equals("name" in person1, true);
})

test('Ch060103 - 原型模式 - hasPrototypeProperty函数', function() {
    function hasPrototypeProperty(object, name) {
        return !object.hasOwnProperty(name) && (name in object);
    }
    
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayname = function() {
        return (this.name);
    }
    
    var person = new Person();
    equals(hasPrototypeProperty(person, "name"), true, "检验是否有name属性");
    
    person.name = 'Jedi';
    equals(hasPrototypeProperty(person, "name"), false, "更改后再检查");
})

test('Ch060103 - 原型模式 - 更简单的原型语法', function() {
    function Person() {}
    Person.prototype = {
        name : "Nicholas",
        age : 29,
        job : "Software Engineer",
        sayname : function() {
            return this.name;
        }
    }
    
    var person = new Person();
    equals(person.name, 'Nicholas');
    equals(person.age, 29);
    equals(person.job, 'Software Engineer');
    equals(person.sayname(), 'Nicholas');
})

test('Ch060103 - 原型模式 - 原型的动态性', function() {
    function Person() {}
    Person.prototype = {
        name : "Nicholas",
        age : 29,
        job : "Software Engineer",
        sayname : function() {
            return this.name;
        }
    }
    
    var person = new Person();
    Person.prototype.sayhi = function() { return "hi"; }
    
    equals(person.sayhi(), "hi");
})

test('Ch060103 - 原型模式 - 原生对象的原型1', function() {
    equals((typeof Array.prototype.sort), "function");
    equals((typeof String.prototype.substring), "function");
})

// TODO : 基本对象上无法增加原型方法，书上似乎是错的
//test('Ch060103 - 原型模式 - 原生对象的原型2', function() {
//    String.prototype.startsWith() = function(text) {
//        return this.indexOf(text) == 0;
//    }
//    
//    var msg = "Hello world!";
//    equals(msg.prototype.startsWith("Hello"), true);
//})

// TODO : 构造JavaScript对象不正确
test('Ch060103 - 原型模式 - 原型对象的问题', function() {
    function Person(){}
    Person.prototype = {
        constructor : Person,
        name : "Jedi",
        age : 34,
        job : "Tester",
        friends : ["Bing", "Mei"],
        sayname : function() {
            return this.name;
        }
    }
    
    var person1 = new Person();
    var person2 = new Person();
    
    person1.friends.push("Fang");
    equals(person1.friends[0], "Bing");
    equals(person1.friends[1], "Mei");
    equals(person1.friends[2], "Fang");
    ok(isNaN(person1.friends[4]));
    ok(person1.friends === person2.friends);
})
