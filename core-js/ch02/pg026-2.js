// File: pg026-2.js
// Description: == and === operator

var obj1 = {
    id: 'self',
    name: 'object',
    toString: function() {
        return "object 1";
    }
}

var obj2 = 'object 1';

console.log(obj1 == obj2);
console.log(obj1 === obj2);