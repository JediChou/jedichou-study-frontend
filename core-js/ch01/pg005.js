// File: pg005.js
// Description: 使用js的弱类型特性
// Excute: node pg005.js

// Jedi: 注意这个console.log()的输出
var s = 'text'; console.log(s + " " + typeof(s));
s = 12 + 5; console.log(s + " " + typeof(s));
s = 6.0003; console.log(s + " " + typeof(s));
s = new Object(); console.log(s + " " + typeof(s));