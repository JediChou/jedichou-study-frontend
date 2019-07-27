// File: List0201.ts
// Ref: Apress Pro TypeScript
// Listing 2-1. JavaScript dynamic types

// Assignment of different types
// var dynamic = 'A string'; dynamic = 52;
// console.log(dynamic);

// Operations with different types
var days = '7';
// var hours = 24;

// 168 (luckily, the hours string is coerced)
// var week = day * hours;
// console.log(week);

// 77 (concatenage 7 and 7)
var fortnight = days + days;
console.log(fortnight);

// calling functions
function getVolume(width, height, depth) {
	return width * height * depth;
}

// NaN (10 * undefined * undefined)
var volumeA = getVolume(10);
console.log(volumeA);

// 32 (the 8 is ignored)
var volumeB = getVolume(2, 4, 4, 8);
console.log(volumeB);
