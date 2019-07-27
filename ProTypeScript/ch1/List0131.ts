// File: List0131.ts
// Ref: Apress Pro TypeScript
// Listing 1-31. Arrow functions

var add1 = (a: number, b:number) => a + b;
var add2 = (a: number, b:number) => { return a+b; }
var add3 = function(a:number, b:number) { return a+b; }

// output: 7 15 19
console.log(add1(3,4), add2(7,8), add3(9,10));