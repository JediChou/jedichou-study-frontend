// File: hb-object.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** Object **
//
// object is a type that represents the non-primitive 
// type, i.e. anything that is not number, string, boolean, 
// bigint, symbol, null, or undefined.
//
// With object type, APIs like Object.create can be better 
// represented. For example:

declare function createObj(o: object | null): void;
createObj({prop: 0});  // OK
createObj(null);  // OK

// createObj(42); // Error
// createObj("string");  // Error
// createObj(false); // Error
// createObj(undefined); // Error
