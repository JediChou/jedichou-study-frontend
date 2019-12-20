// File: hb-enum4.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** enum **
// A handy feature of enums is that you can also go from
// a numeric value to the name of that valu ein the enum.
// For example, if we had the value 2 but werent't sure
// what that mapped to in the Color enum above, we could,
// we could look up the corresponding name:

enum Color { Red=1, Green, Blue};
let colorName: string = Color[2];
console.log(colorName);