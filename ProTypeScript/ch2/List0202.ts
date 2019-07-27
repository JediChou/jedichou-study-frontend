// File: List0202.ts
// Ref: Apress Pro TypeScript
// Listing 2-2. Using and avoding equivalence

interface ObjectId {
	getValue(): number;
}

class CustomerId {
	constructor(private id: number) {}
	getValue() { return this.id; }
}

class ProductId {
	constructor(private id: number) {}
	getValue() { return this.id; }
}

class Example {
	static avoidAccidentalEquivalence(id: CustomerId) {
		// Implementation
		console.log("avoidAccidentalEquivalence " + id.getValue());
	}
	static useEquivalence(id: ObjectId) {
		// Implementation
		console.log("useEquivalence " + id.getValue());
	}
}

var customerId = new CustomerId(1);
var productId = new ProductId(5);

Example.avoidAccidentalEquivalence(customerId);
Example.useEquivalence(customerId);
Example.useEquivalence(productId);
