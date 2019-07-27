// File: pg024-3.js
// Description: [] operator for object

// simple define
var obj = {
    field: 'self',
    printInfo: function() {
        return this.field;
    }
}

// wah! It is a magic...
// Jedi: so the js object is a array in fact.
for (key in obj) console.log(key + ": " + obj[key]);