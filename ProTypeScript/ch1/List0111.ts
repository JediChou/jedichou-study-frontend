// File: List0111.ts
// Ref: Apress Pro TypeScript
// Listing 1-11. Type assertions

interface House {
	bedrooms: number;
	bathrooms: number;
}

interface Mansion {
	bedrooms: number;
	bathrooms: number;
	butlers: number;
}

var avenueRoad: House = {
	bedrooms: 11,
	bathrooms: 10,
	butlers: 1
}

// Errors TS2322: Type 'House' is not assignable to type 'Mansion'.
// var mansion: Mansion = avenueRoad;

// TODO: Wah! Not same as your description.
var mansion: Mansion = <Mansion>avenueRoad;
console.log(mansion);
