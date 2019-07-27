// File: List0132.ts
// Ref: Apress Pro TypeScript
// Listing 1-32. Warpping an object in parentheses

var makeName = (f: string, l:string) => ({first: f, last: l});
console.log(makeName('Sarah', 'Logan'));