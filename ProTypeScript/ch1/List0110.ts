// File: List0110.ts
// Ref: Apress Pro TypeScript
// Listing 1-10. Flags
// Jedi: Bit operation

enum DiscFlags {
	None = 0,
	Drive = 1,
	Influence = 2,
	Steadiness = 4,
	Conscientiousness = 8
}

// Using flags
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

// Test flags
console.log((personality & DiscFlags.Drive) == DiscFlags.Drive);
console.log((personality & DiscFlags.Influence) == DiscFlags.Influence);
console.log((personality & DiscFlags.Steadiness) == DiscFlags.Steadiness);
console.log((personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness);
