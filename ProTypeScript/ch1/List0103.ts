// File: List0103.ts
// Reference: Apress Pro TypeScript
// Listing 1-3. Implicit global variable

// define global variable;
var total = 0;

// define a function
function addNumbers(a, b) {
	// missing var keyword
	total = a + b;
	return total;
}

addNumbers(30, 40);
console.log("The result is " + total);
