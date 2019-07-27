// File: List0140.ts
// Ref: Apress Pro TypeScript
// Listing 1-40. Property getters and setters

interface StockItem {
	description: string;
	asin: string;
}

class WarehouseLocation {
	private _stockItem;
	constructor(
		public aisle: number,
		public slot: string){}
	get stockItem() { return this._stockItem; }
	set stockItem(item: StockItem) {
		this._stockItem = item;
	}
}

var figure = { asin: 'BOO1TEQ2PI', description: 'Figure'};
var warehouseSlot = new WarehouseLocation(15, 'A6');
warehouseSlot.stockItem = figure;

// TODO: Error message: (Jedi: warning message ?)
// List0140.ts(15,6): error TS1056: Accessors are only available when targeting ECM AScript 5 and higher.
// List0140.ts(16,6): error TS1056: Accessors are only available when targeting ECM AScript 5 and higher.
