// File: List0143.ts
// Ref: Apress Pro TypeScript
// Listing 1-43. Preserving context with a property and an arrow function


class Counter {
	private count = 0;
	click = () => {
		this.count++;
		console.log(this.count);
	}
}

var cc = new Counter();
for (var i=0; i < 10; i++)
	cc.click();
