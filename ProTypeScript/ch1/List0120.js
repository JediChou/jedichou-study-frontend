// File: List0120.ts
// Ref: Pro TypeScript
// Listing 1-20. OR operator
// Empty string are falsey
var errorMessage = '';
// result is 'Saved OK'
var result = errorMessage || 'Saved OK';
console.log(result);
// Filled strings are truthy
errorMessage = 'Error Detected';
// result is 'Error Detected'
result = errorMessage || 'Saved OK';
console.log(result);
var undefinedLogger;
// if the logger isn't initialized,
// substitute it for the result of the
// right-hand expression
var logger = undefinedLogger || { log: function (msg) { console.log(msg); } };
logger.log('Message');
