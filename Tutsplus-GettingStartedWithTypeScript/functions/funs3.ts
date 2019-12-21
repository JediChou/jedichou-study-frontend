// File: funs3.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   Getting Started with TypeScript - 3.4. Functions and Overloads

let sum5 =  function(a: number, b: number, ...c:number[]): number {
    let total = a + b;
    c.forEach(elt => {
        total += elt
    });
    return total;
}
console.log(sum5(1,2));
console.log(sum5(1,2,3));
console.log(sum5(1,2,3,4));
