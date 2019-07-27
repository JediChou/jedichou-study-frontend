// File: List0152.ts
// REF: Apress Pro TypeScript
// Listing 1-52. Reference comments

/// <reference path="List0150.ts" />

module Docking {

	// Jedi: import module at here.
	import Ship = Shipping.Ship;

	// use class from imported module.
	export class Dock {
		private dockedShips: Ship[] = [];
		arrival(ship: Ship) {
			this.dockedShips.push(ship);
		}
	}

}

var dock = new Docking.Dock();
console.log(dock);
