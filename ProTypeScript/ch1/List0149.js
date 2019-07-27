// File: List0149.ts
// Ref: Apress Pro TypeScript
// Listing 1-49. Obtaining runtime types
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Display = (function () {
    function Display() {
        this.name = '';
    }
    return Display;
}());
var Television = (function (_super) {
    __extends(Television, _super);
    function Television() {
        _super.apply(this, arguments);
    }
    return Television;
}(Display));
var Hifi = (function () {
    function Hifi() {
    }
    return Hifi;
}());
var Describer = (function () {
    function Describer() {
    }
    Describer.getName = function (inputClass) {
        // RegEx to get the class name
        // Jedi: good!!
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(inputClass.constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    };
    return Describer;
}());
var tv = new Television();
var radio = new Hifi();
var tvType = Describer.getName(tv);
var radioType = Describer.getName(radio);
console.log(tvType);
console.log(radioType);
