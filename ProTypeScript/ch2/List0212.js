// File: List0212.ts
// Ref: Apress Pro TypeScript
// Listing 2-12. Checking a parameter
function acceptNumber(input) {
    return input;
}
var Size;
(function (Size) {
    Size[Size["M"] = 0] = "M";
    Size[Size["L"] = 1] = "L";
    Size[Size["XL"] = 2] = "XL";
    Size[Size["XXL"] = 3] = "XXL";
    Size[Size["XXXL"] = 4] = "XXXL";
})(Size || (Size = {}));
;
console.log(acceptNumber(1));
console.log(acceptNumber(Size.XL));
console.log(acceptNumber(null));
