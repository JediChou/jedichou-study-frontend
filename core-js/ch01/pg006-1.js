// File: pg006-1.js
// Description: JavaScript的面向对象编程示例
// Excute: node pg006-1.js

// 超级厉害的map函数
var arr = [1,2,3,4,5];
var result = arr.map(function(elt){
    return elt * 2;
});

console.log(result);
console.log(typeof(result));