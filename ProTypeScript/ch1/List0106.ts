// File: List0106.ts
// Ref: Apress Pro TypeScript
// List 1-6. Using an interface to simplify type annotations

interface Person {
	name: string;
	height: number;
}

var sarah: Person = {
	name: 'Sarah',
	height: 163.00
}

console.log(sarah.name);

// Jedi: notice, can not implement two interfaces.
