// File: pg031.js
// Description: use prototype to create js object

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() { return this.name;},
    this.getAge = function() { return this.age;}
}

var persons = [
    new Person('Tom', 38),
    new Person('Jerry', 6)
];

persons.forEach(function(elt){
    console.log('----------------------');
    console.log('Name: ' + elt.getName());
    console.log('Age : ' + elt.getAge());
    console.log(elt);
});