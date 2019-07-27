// File: List0205.ts
// Ref: Apress Pro TypeScript
// Listing 2-5. Bottom-up and top-down inference
// Jedi: don't understand !
function add(a, b) {
    // The return value is used to determine
    // the return type of the function
    return a + b;
}
// The cb parameter is inferred to be a function accept a sting
var callsFunction = function (cb) {
    cb('Done');
    // Supplied parameter does not match any signature of the call target
    // cb(1);
};
// The result parameter is inferred to be a string
var result = callsFunction(function (result) {
    return result;
});
console.log(result);
