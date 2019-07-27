// File: List0124.ts
// Ref: Apress Pro TypeScript
// Listing 1-24. Function type annotations
function getAverage(a, b, c) {
    var total = a + b + c;
    var average = total / 3;
    return 'The average is ' + average;
}
var result = getAverage(4, 3, 8);
console.log(result);
