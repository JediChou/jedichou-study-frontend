// File: List0207.ts
// Ref: Apress Pro TypeScript
// Listing 2-7. Best common type - example
var example = [
    { a: 'A', b: 1, c: true },
    { a: 'B', b: 2 },
    { b: 3 }
];
for (var i = 0; i < example.length; i++) {
    var value = example[i];
    // property a does not exists on {b:3} 
    // console.log(value.a);
    console.log(value.b);
}
