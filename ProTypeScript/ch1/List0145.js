// File: List0145.ts
// Ref: Apress Pro TypeScript
// Listing 1-45. Preserving context with bind
// TODO: It is not clear!?
var clickHandler = clickCounter.registerClick.bind(clickCounter);
document.getElementById('target').onclick = clickHandler;
