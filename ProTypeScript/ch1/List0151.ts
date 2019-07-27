// File: List0151.ts
// REF: Apress Pro TypeScript

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
