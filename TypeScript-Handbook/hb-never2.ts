// File: hb-never2.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html

// Inferred return type is never
function fail() {
    return (function(msg: string){
        throw new Error(msg);
    })("Something failed");
}
fail();