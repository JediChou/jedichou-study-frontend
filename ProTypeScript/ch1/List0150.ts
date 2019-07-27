// File: List0150.ts
// REF: Apress Pro TypeScript
// Listing 1-50. Exporting from a module

module Shipping {

	// Available as Shipping.Ship
	export interface Ship {
		name: string;
		port: string;
		displacement: number;
	}

	// Available as Shipping.Ferry
	export class Ferry implements Ship {
		constructor(
			public name: string,
			public port: string,
			public displacement: number	
		){}
	}

	// Only available inside of Shipping module
	var defaultDisplacement = 4000;

	class PrivateShip implements Ship {
		constructor (
			public name: string,
			public port: string,
			public displacement: number = defaultDisplacement
		){}
	}
}

var ferry = new Shipping.Ferry('BaWangWan', 'HongKong', 3220);
console.log(ferry);
