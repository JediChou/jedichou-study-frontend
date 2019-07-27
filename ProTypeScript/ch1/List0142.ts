// File: List0142.js
// Ref: Apress Pro TypeScript
// Listing 1-42. Lost context

class ClickCounter {
	private count = 0;
	registerClick() {
		this.count++;
		console.log(this.count);
	}
}

var cc = new ClickCounter();

// Jedi: you can bind, but get wrong result.
document.getElementById('target').onclick = cc.registerClick;
