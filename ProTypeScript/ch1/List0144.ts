// File: List0144.ts
// Ref: Apress Pro TypeScript
// Listing 1-44. Preserving context with a closure

// use closure feature to bind counter.
doucment.getElementById('target').onclick = function() {
	clickCounter.registerClick();
}
