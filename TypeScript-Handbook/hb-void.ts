// File: hb-void.ts
// Reference: http://www.typescriptlang.org/docs/handbook/basic-types.html
// 
// ** void **
// void is a little like the opposite of any: the absence of
// having any type at all. You may commonly see this as the
// return type of functions that do not retun a value:

voidMethodDemo();
function voidMethodDemo(): void {
    console.log("This is a void method");
}

// Jedi: 因为ts要是编译后再执行的，所以voidMethodDemo方法可写在定义前面