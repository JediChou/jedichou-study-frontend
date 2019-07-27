// File: List0118.ts
// Ref: Apress Pro TypeScript
// Listing 1-18. Shorthand Boolean test

var myProperty;

if (myProperty) {
	// Reaching this location means that...
	// myProperty is not null
	// myProperty is not undefined
	// myProperty is not boolean false
	// myProperty is not an empty string
	// myProperty is not the number 0
	// myProperty is not NaN
}
