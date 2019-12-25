// Ref: Apress Beginning JSON
// Listing 5-4.
//  A Nested Data Structure
// Jedi Chou, 2016.6.16

var author = new Object();
author.name = "Ben";
author.age = 36;
author.pets = [
    { name: "DaWan", age: 3.5 },
    { name: "XiWan", age: 4 }  
];

console.log(author);