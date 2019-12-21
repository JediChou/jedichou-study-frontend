// File: funs.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   Getting Started with TypeScript - 3.4. Functions and Overloads

// normal
function sum(a: number, b: number) {
    return a + b;
}

// function object
var sum2 = function(a: number, b: number) {
    return a + b;
}

// lambda
var sum3 = (a: number, b: number) => {
    return a + b;
}

// lambda 2
var sum4 = (a: number, b: number) => a + b;

console.log(sum(1,2));
console.log(sum2(1,2));
console.log(sum3(1,2));
console.log(sum4(1,2));
