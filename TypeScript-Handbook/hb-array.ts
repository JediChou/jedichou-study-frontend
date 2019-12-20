// File: hb-array.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** Array **
// TypeScript, like JavaScript, allows you to work with
// arrays of values. Array types can be written in one
// of two ways. In the first, you use the type of the
// elements followed by [] to denote an array of that
// element type:

let aNumList: number[] = [1,2,3];
let otherNumList: Array<number> = [4,5,6];

for (var i=0; i<3; i++) {
    console.log(aNumList[i], otherNumList[i]);
}
