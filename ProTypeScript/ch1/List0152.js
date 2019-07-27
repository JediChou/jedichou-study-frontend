// File: List0152.ts
// REF: Apress Pro TypeScript
// Listing 1-52. Reference comments
/// <reference path="List0150.ts" />
var Docking;
(function (Docking) {
    // use class from imported module.
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    }());
    Docking.Dock = Dock;
})(Docking || (Docking = {}));
var dock = new Docking.Dock();
console.log(dock);
