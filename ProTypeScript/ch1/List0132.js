// File: List0132.ts
// Ref: Apress Pro TypeScript
// Listing 1-32. Warpping an object in parentheses
var makeName = function (f, l) { return ({ first: f, last: l }); };
console.log(makeName('Sarah', 'Logan'));
