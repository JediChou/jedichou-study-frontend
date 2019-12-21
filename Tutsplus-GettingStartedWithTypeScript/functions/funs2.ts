// File: funs2.ts
// From: 
//   Tutsplus - Getting Started with TypeScript
//   Getting Started with TypeScript - 3.4. Functions and Overloads

// Style 1st
let First_SayHello = function(firstName: string, lastName: string) {
    return "Hello " + firstName + " " + lastName;
}
// console.log(First_SayHello("Jedi", "Chou"));

// Style 2nd
var Second_SayHello = function(firstName: string, lastName?: string) {
    let greeting = "Hello " + firstName;
    if (lastName) {
        greeting += " " + lastName;
    }
    return greeting;
}
// console.log(Second_SayHello("Jedi"));
// console.log(Second_SayHello("Jedi", "Chou"));

// Style 3rd
var Third_SayHello = function(firstName: string, lastName: string = "") {
    return "Hello " + firstName + " " + lastName;
}
console.log(Second_SayHello("Jedi"));
console.log(Second_SayHello("Jedi", "Chou"));
