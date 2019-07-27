// File: pg004.js
// Description: 动态地访问一个JavaScript对象的属性
// Execute: node pg004.js

var key = "property";
console.log(key);

// 注意js的这种写法，与传统编译型语言不一样
var obj = { property: 'my property'}
console.log(obj['property']);
console.log(obj.property);

// wah! cool feature
delete obj.property;
console.log(obj.property);