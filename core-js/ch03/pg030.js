// File: pg030.js
// Description: use prototype to create js object

// declare a base object
function Base(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    }
}

// declare a child object
function Child(id) {
    this.id = id;
    this.getId = function() {
        return this.id;
    }
}

// use prototype
Child.prototype = new Base("base");

// create an instance and output result
var c1 = new Child('child');
console.log(c1.getId());
console.log(c1.getName());  // wah!