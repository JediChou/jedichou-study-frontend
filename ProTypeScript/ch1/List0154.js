// File: List0154.ts
// Ref: Apress Pro TypeScript
// Listing 1-54. Importing external modules
"use strict";
// import file by file name
var Shipping = require('./Shipping');
var Dock = (function () {
    function Dock() {
        this.dockedShips = [];
    }
    Dock.prototype.arrival = function (ship) {
        this.dockedShips.push(ship);
    };
    Dock.prototype.getDockedShips = function () {
        return this.dockedShips;
    };
    return Dock;
}());
exports.Dock = Dock;
// create two ferry instance
var ferry1 = new Shipping.Ferry('pww', '400', 3020);
var ferry2 = new Shipping.Ferry('pww2', '300', 3021);
// create a dock instance and use arrival method add ferry instances
var dock = new Dock();
dock.arrival(ferry1);
dock.arrival(ferry2);
// output
console.log(dock.getDockedShips());
