// File: pg006-2.js
// Description: JavaScript的面向对象编程示例
// Execute: node pg006-2.js

// map函数可以做好多事情，比如遍历就无需使用for
var girls = [
    {name: 'Sarah', age: 24},
    {name: 'Rena', age: 26},
    {name: 'Dora', age: 25}
];

var girl_names = girls.map(function(girl){
    return girl.name.toUpperCase();
});

console.log(girl_names);