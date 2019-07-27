// File: List0112.ts
// Ref: Apress Pro TypeScript
// Listing 1-12. Forced type assertions

var name: string = 'Online Game';
var bedrooms: number = <number> <any> name;
console.log(bedrooms);
