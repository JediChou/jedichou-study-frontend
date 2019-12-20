// File: hb-never.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html

// Function returning never must have unreachable end point
function throwAnError(message: string): never {
    throw new Error(message);
}
throwAnError("Jedi throw an error message");