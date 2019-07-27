// File: List0126.ts
// Ref: Apress Pro TypeScript
// Listing 1-26. Default parameters
function concateArr(items, separator, beginAt, endAt) {
    if (separator === void 0) { separator = ','; }
    if (beginAt === void 0) { beginAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1))
            result += separator;
    }
    return result;
}
var items = ['A', 'B', 'C'];
var result1 = concateArr(items);
console.log(result1);
var result2 = concateArr(items, '-', 1);
console.log(result2);
