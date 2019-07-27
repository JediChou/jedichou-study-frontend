// File: List0146.ts
// Ref: Apress Pro TypeScript
// Listing 1-46. Using the instanceof operator

class Display { name: string = ''; }
class Television extends Display {}
class HiFi {}

var display = new Display();
var television = new Television();
var hifi = new HiFi();

console.log(display instanceof Display);
console.log(television instanceof Display);
console.log(hifi instanceof Display);
