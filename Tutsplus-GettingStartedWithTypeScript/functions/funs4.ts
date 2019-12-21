// File: funs4.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   Getting Started with TypeScript - 3.4. Functions and Overloads

var foo = (a, b): number => {
    return a + b;
}
console.log(foo(1,2));
console.log(foo("Jedi", "Becky"));
console.log(foo("Jedi", 1));

var foo2 = (a, b): any => {
    if (typeof a == "string" &&
        typeof b == "string"
    ) return a + " " + b;
    return a + b;
}
console.log(foo2(1,2));
console.log(foo2("something", "get it"));
