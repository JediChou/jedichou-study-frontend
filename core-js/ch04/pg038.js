// File: pg038.js
// Description: 创建函数

// 作者提示这种方式几乎没人用
var func = new Function("x", "y", "return (x+y)");
console.log(func(2,4));

// 常见形式1
function func1(x, y) {return x+y}
console.log(func1(2, 4)); 

// 常见形式2
var add = function(x, y) {return x+y}
console.log(add(2, 4));