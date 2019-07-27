// File: pg026-1.js
// Description: == and === operator

var obj = {
    id: 'self',
    name: 'object'
}

var oa = obj;
var ob = obj;

console.log(oa == ob);
console.log(oa === ob);