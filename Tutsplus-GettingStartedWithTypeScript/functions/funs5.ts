// File: funs5.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   Getting Started with TypeScript - 3.4. Functions and Overloads

function foo6(a: number, b: number): number
function foo6(a: string, b: string): string
function foo6(a, b): any {
    if (typeof a == "string" && typeof b == "string") {
        return a + " " + b;
    }
    return a + b;
}

console.log(foo6(1,2));
console.log(foo6("Jedi", "Chou"));