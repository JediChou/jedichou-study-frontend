// File: List0148.ts
// Ref: Apress Pro TypeScript
// Listing 1-48. Uninitialized property

class Display {name: string;}
var display = new Display();
console.log('name' in display);
