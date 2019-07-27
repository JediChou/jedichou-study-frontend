// File: List0203.ts
// Ref: Apress Pro TypeScript
// Listing 2-3. TypeScript ordered array class

// define OrderedArray class
class OrderedArray<T> {
	private items: T[] = [];
	constructor(private comparer?: (a: T, b: T) => number) {}
	add(item: T): void {
		this.items.push(item);
		this.items.sort(this.comparer);
	}
	getItem(index: number): T {
		if (this.items.length > index) {
			return this.items[index]
		}
		return null;
	}
}

// create a instances and add some number
var orderedArray: OrderedArray<number> = new OrderedArray<number>();
orderedArray.add(5);
orderedArray.add(1);
orderedArray.add(3);

// output
for (var i=0; i<3; i++) {
	var temp = orderedArray.getItem(i);
	console.log(temp);
}
