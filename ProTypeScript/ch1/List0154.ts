// File: List0154.ts
// Ref: Apress Pro TypeScript
// Listing 1-54. Importing external modules

// import file by file name
import Shipping = require('./Shipping');

export class Dock {
	private dockedShips: Shipping.Ship[] = [];
	arrival(ship: Shipping.Ship) {
		this.dockedShips.push(ship);
	}
	getDockedShips(): Shipping.Ship[] {
		return this.dockedShips;
	}
}

// create two ferry instance
var ferry1 = new Shipping.Ferry('pww', '400', 3020);
var ferry2 = new Shipping.Ferry('pww2', '300', 3021);

// create a dock instance and use arrival method add ferry instances
var dock = new Dock();
dock.arrival(ferry1);
dock.arrival(ferry2);

// output
console.log(dock.getDockedShips());
