// File: List0151.ts
// REF: Apress Pro TypeScript
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
