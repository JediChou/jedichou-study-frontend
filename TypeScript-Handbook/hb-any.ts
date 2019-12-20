// File: hb-any.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** Any **
// We may need to describe the type of variables that we
// do not know when we are writing an application. These
// values may come from dynamic content, e.g. from the
// user or a 34d party library. In these cases, we want
// to opt-out of type checking and let the values pass
// through compile-time checks. To do so, we label these
// with the any type:

let notSureIns1: any = 4;
console.log("notSure:", notSureIns1);

notSureIns1 = "maybe a string instead";
console.log("notSure:", notSureIns1);

notSureIns1 = false;
console.log("notSure:", notSureIns1);