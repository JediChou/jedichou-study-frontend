// File: List0105.ts
// Ref: Apress Pro TypeScript
// Listing 1-5. Type annotations
// demo1: primitive type annotation
var name = "Jedi Chou";
var height = 173.00;
var isActive = true;
// demo2: array type annotation
var names = ['Sarah', 'Latin', 'Joy'];
// demo3: function annotation with parameter type annotation
// and return type annotation
var sayHello;
// demo4: implementation of sayHello function
sayHello = function (name) {
    return 'Hello ' + name;
};
// demo5 object type annotation
var person;
// demo6: Implementation of a person object
person = {
    name: "My Toy",
    height: 163.00
};
function output() {
    // demo1 output
    console.log("demo1 output: name ->", name);
    console.log("demo1 output: height ->", height);
    console.log("demo1 output: isActive ->", isActive);
    // demo2 output
    console.log("demo2 output: array ->", names);
    // demo3,4 output
    console.log("demo3, 4 output: call func result ->", sayHello('sarah'));
    // demo5,6 output
    console.log("demo5, 6 output: object ->", person);
    console.log("demo5, 6 output: object.name ->", person.name);
    console.log("demo5, 6 output: object.height ->", person.height);
}
output();
