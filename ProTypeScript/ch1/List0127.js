// File: List0127.ts
// Ref: Apress Pro TypeScript
// Listing 1-27. Rest Parameters
function getAvg() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i - 0] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var avg = total / count;
    return 'The average is ' + avg;
}
console.log(getAvg(2, 4, 6, 7, 10));
