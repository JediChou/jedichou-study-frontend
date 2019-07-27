// File: List0158.ts
// Ref: Apress Pro TypeScript
// Listing 1-58. Class and module merging

// Class/Module Merging
class Car {}
module Car {
	export class Engine{}
	export class GloveBox{}
}

// Create some instances
var car = new Car();
var engine = new Car.Engine();
var gloveBox = new Car.GloveBox();

// Output
console.log(car, engine, gloveBox);
