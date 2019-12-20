// File: hb-any2.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
//
// ** any **
// The any type is a powerful way to work with existing JavaScript,
// allowing you to gradually opt-in and opt-out of type checking
// during compilation. You might except Object to play a similar role,
// as it does in other languages. However, variable of tyep Object
// only allow you to assign any value to them. You can't call arbitrary
// methods on them, even ones that actually exist:

let notSureIns2: any = 4;
notSureIns2.ifItExists();
notSureIns2.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed();  // Error: Property 'toFixed' doesn't exist on type 'Object'
