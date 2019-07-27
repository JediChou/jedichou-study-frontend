// File: pg019.js
// Description: convert magic

var x = 3;
var y = x + "2"; // -> '32'
var z = x + 2; // -> 5
console.log(typeof y);
console.log(typeof z);

// JavaScript convert magic
// 1. valueOf() high pirror than toString()
// 2. ruler
//  "通过调用对象的valueOf()方法来取得对象的值，
//   如果和上下文的类型匹配，则使用该值。如果valueOf
//   取不到值的话，则需要调用对象的toString()，而
//   如果上下文为数值型，则又需要将此字符串转换为数
//   值。"
// 3. 注意JavaScript是弱类型语言