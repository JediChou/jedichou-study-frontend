// File: hb-enum2.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** enum **
// By default, enums begin numbering their members starting
// at 0. You can change this by manually setting the value
// of one its members. For example, we can start the previous
// example at 1 instaed of 0

enum ColorExample2 {Red=1, Green, Blue};
let c1 = ColorExample2.Red;
let c2 = ColorExample2.Green;
let c3 = ColorExample2.Blue;
console.log(c1, c2, c3);