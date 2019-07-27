// File: List0136.ts
// Ref: Apress Pro TypeScript
// Listing 1-36. Extending the NodeList interface
// Jedi: don't understand.

interface NodeList {
	onclick: (event: MouseEvent) => any;
}

var nodeList = document.getElementsByTagName('div');
nodeList.onclick = function(event: MouseEvent) {
	alert('clicked');
}
