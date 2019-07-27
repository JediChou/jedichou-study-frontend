// File: List0212.ts
// Ref: Apress Pro TypeScript
// Listing 2-12. Checking a parameter

function acceptNumber(input: number) {
	return input;
}
enum Size { M, L, XL, XXL, XXXL};

console.log(acceptNumber(1));
console.log(acceptNumber(Size.XL));
console.log(acceptNumber(null));
