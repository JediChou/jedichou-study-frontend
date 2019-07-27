// File: List0117.ts
// Ref: Apress Pro TypeScript
// Listing 1-17. NOT operator
var turthyString = 'Truthy string';
var falseyString;
// False, it checks the string but inverts the truth
var invertedTest = !turthyString;
console.log(invertedTest);
// True, the string is not undefined or empty
var truthTest = !!turthyString;
console.log(truthTest);
// False, the string is empty
var falseyTest = !!falseyString;
console.log(falseyTest);
