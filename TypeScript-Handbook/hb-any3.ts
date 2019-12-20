// File: hb-any3.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** any **
// The any type is also handy if you know some part
// of the type, but perhaps not all of it. For example,
// you may haven an array but the array has a mix of
// different types:

let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(list);