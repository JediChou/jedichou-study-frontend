// File: pg039.js
// Description: 函数与其他对象不一样的地方

function p() {
    console.log("invoke p by ()");
}

p.id = 'func';
p.type = 'function';

console.log(p);
console.log(p.id + ': ' + p.type);
console.log(p());