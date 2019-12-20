// File: hb-tuple.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** Tuple **
// Tuple types allow you to express an array with a
// fixed number of elements whose types are known, but
// need not be the same. For example, you may want to
// represent a value as a pair of a string and a number.

let x: [string, number];
x = ["hello", 10];
console.log(x[0].substring(1));

let y: [string, number] = ["jedi", 41];
console.log(y[0], y[1]);
