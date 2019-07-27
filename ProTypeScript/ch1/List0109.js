// File: List0109.ts
// Ref: Apress Pro TypeScript
// Listing 1-9. Enumeration split across multiple blocks
// Jedi: This feature like C style enum type.
var BoxSize;
(function (BoxSize) {
    BoxSize[BoxSize["Large"] = 2] = "Large";
    BoxSize[BoxSize["XLarage"] = 3] = "XLarage";
    BoxSize[BoxSize["XXLarge"] = 4] = "XXLarge";
})(BoxSize || (BoxSize = {}));
var size = BoxSize.XXLarge;
console.log(size);
