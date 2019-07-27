// File: List0148.ts
// Ref: Apress Pro TypeScript
// Listing 1-48. Uninitialized property
var Display = (function () {
    function Display() {
    }
    return Display;
}());
var display = new Display();
console.log('name' in display);
