// execute1.js
// reference: https://nodejs.org/en/docs/guides/timers-in-node/
myFunc = (arg) => console.log(`arg ws => ${arg}`)
setTimeout(myFunc, 1500, 'funky')