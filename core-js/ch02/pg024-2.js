// File: pg024-2.js
// Description: [] operator for object

// simple define
var obj = {
    field: 'self',
    printInfo: function() {
        return this.field;
    }
}

// simple output
console.log(obj.field);
console.log(obj.printInfo());