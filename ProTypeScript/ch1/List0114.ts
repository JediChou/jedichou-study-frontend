// File: List0114.ts
// Ref: Apress Pro TypeScript
// Listing 1-14. Increment and decrement of enumerations

enum Size { S, M, L, XL }

var size = Size.S;
++size;
console.log(Size[size]);

var size = Size.XL;
--size;
console.log(Size[size]);

var size = Size.XL;
++size;
console.log(Size[size]);
