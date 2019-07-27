// File: List0147.ts
// Ref: Apress Pro TypeScript
// Listing 1-47. The in property

class Display { name: string = ''; }
class Television extends Display {}
class Hifi {}

var display = new Display();
var television = new Television();
var hifi = new Hifi();

console.log('name' in display);
console.log('name' in television);
console.log('name' in hifi);
