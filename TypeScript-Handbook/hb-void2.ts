// File: hb-void2.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** void **
// Declaring variables of type void is not useful because you
// can only assign null (only if --strictNullChecks is not specified,
// see next section) or undefined to them:

let unusable: void = undefined;
console.log(unusable);

unusable = null;
console.log(unusable);