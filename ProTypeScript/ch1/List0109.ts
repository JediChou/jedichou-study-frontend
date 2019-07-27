// File: List0109.ts
// Ref: Apress Pro TypeScript
// Listing 1-9. Enumeration split across multiple blocks

// Jedi: This feature like C style enum type.
enum BoxSize {
	Large = 2,
	XLarage,
	XXLarge
}

var size = BoxSize.XXLarge;
console.log(size);
