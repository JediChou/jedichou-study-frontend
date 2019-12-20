// File: hb-enum.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** enum **
// A help addition to the standard set of datatypes from
// JavaScript in the enum. As in language like C#, an enum
// is way of giving more friendly names to sets of numeric
// values.

enum ColorExampel1 { Red, Green, Blue };
let ce1: ColorExampel1 = ColorExampel1.Red;
let ce2: ColorExampel1 = ColorExampel1.Green;
let ce3: ColorExampel1 = ColorExampel1.Blue;
console.log(ce1, ce2, ce3);