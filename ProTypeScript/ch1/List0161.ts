// File: List0161.ts
// Ref: Apress Pro TypeScript
// Listing 1-61. Generic classes

class DomainId<T> {
	constructor(public id: T) {}
	get value(): T {
		return this.id;
	}
}

class OrderId extends DomainId<number> {
	constructor(public orderIdValue: number) {
		super(orderIdValue);
	}
}

class AccountId extends DomainId<string> {
	constructor(public accountIdValue: string) {
		super(accountIdValue);
	}
}

var orderid = new OrderId(2033);
var accountid = new AccountId('2033');

console.log(orderid);
console.log(accountid);
