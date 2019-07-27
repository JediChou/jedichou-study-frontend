// File: List0121.ts
// Ref: Apress Pro TypeScript
// Listing 1-21. Short-circuit evaluation

interface Caravan { rooms: number; }
var caravan: Caravan;

if (caravan && caravan.rooms > 5) {
	console.log('caravan.rooms great than 5');
} else {
	console.log('Something will happen!');
}
