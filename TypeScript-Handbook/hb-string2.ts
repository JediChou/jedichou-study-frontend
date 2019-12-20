// File: hb-string2.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// **string**
// You can also use template strings, which an span
// multiple lines and have embedded expressions.
// These strings are surrounded by the backtick/backquote(`)
// character, and embedded are of the form ${ expr }.

// Define some variables
let fullName: string = `Bob Bobbington`;
let age: number = 37;

// Bind value to template
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month`;

// Output
console.log(sentence);
