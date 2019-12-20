// File: hb-type2.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** Type assertions **

// And the other is the as -syntax
let otherValue: any = "this is a string";
let otherValueLength: number = (otherValue as string).length
console.log(otherValue);
