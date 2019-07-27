// File: pg006-3.js
// Description: JavaScript OOP features
// Execute: node pg006-3.js

// Use filter method
var girls = [
    {name: 'Sarah', age: 24},
    {name: 'Rena', age: 26},
    {name: 'Dora', age: 25}
];

// Jedi feeling: Almost like Linq
var ageGreatThan24 = girls.filter(function(girl){
    return girl.age > 24;
});

console.log(ageGreatThan24);