// File: hb-never3.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html

// Function returning never must have
// unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
infiniteLoop();
console.log("follow infiniteLoop()");