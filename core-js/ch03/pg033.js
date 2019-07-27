// File: pg033.js
// Description: use js object

// define Address class
function Address(street, xno) {
    this.street = street || 'Huang Quan Road',
    this.xno = xno || 135,
    this.toString = function() {
        return "street : " + this.street +
               ", No : " + this.xno;
    }
}

// define Person class
function Person(name, age, addr) {
    this.name = name || 'unknown',
    this.age = age;
    this.addr = addr || new Address(null, null);
    this.getName = function() {return this.name;},
    this.getAge = function() {return this.age;},
    this.getAddr = function() {return this.addr.toString();}
}

var sarah_addr = new Address('TaiBei Road', 520);
var sarah = new Person('Sarah', 26, sarah_addr);
console.log(sarah.getName());
console.log(sarah.getAge());
console.log(sarah.getAddr());

var Sammy = new Person('Sammy', 20);
console.log(Sammy.getName());
console.log(Sammy.getAge());
console.log(Sammy.getAddr());