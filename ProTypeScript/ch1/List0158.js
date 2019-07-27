// File: List0158.ts
// Ref: Apress Pro TypeScript
// Listing 1-58. Class and module merging
// Class/Module Merging
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var Car;
(function (Car) {
    var Engine = (function () {
        function Engine() {
        }
        return Engine;
    }());
    Car.Engine = Engine;
    var GloveBox = (function () {
        function GloveBox() {
        }
        return GloveBox;
    }());
    Car.GloveBox = GloveBox;
})(Car || (Car = {}));
// Create some instances
var car = new Car();
var engine = new Car.Engine();
var gloveBox = new Car.GloveBox();
// Output
console.log(car, engine, gloveBox);
