// File: JsObj3ways.Js
// Description: 3 ways to define a JavaScript class

// 1st: 1.1 Using a function
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}
var apple = new Apple('plant');
console.log(apple.type);
console.log(apple.color);
console.log(apple.getInfo());

// 1st: 1.2 Methods added to the prototype
function SecondApple (type) {
    this.type = type;
    this.color = "red";
}
SecondApple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};
var apple2 = new SecondApple('plant');
console.log(apple2.type);
console.log(apple2.color);
console.log(apple2.getInfo());

// 2nd. Using object literals
var apple3 = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
};
console.log(apple3.type);
console.log(apple3.color);
console.log(apple3.getInfo());

// 3rd. Singleton using a function
var apple4 = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
};
console.log(apple4.type);
console.log(apple4.color);
console.log(apple4.getInfo());
