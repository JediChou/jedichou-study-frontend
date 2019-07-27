// File: List0150.ts
// REF: Apress Pro TypeScript
// Listing 1-50. Exporting from a module
var Shipping;
(function (Shipping) {
    // Available as Shipping.Ferry
    var Ferry = (function () {
        function Ferry(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return Ferry;
    }());
    Shipping.Ferry = Ferry;
    // Only available inside of Shipping module
    var defaultDisplacement = 4000;
    var PrivateShip = (function () {
        function PrivateShip(name, port, displacement) {
            if (displacement === void 0) { displacement = defaultDisplacement; }
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
        return PrivateShip;
    }());
})(Shipping || (Shipping = {}));
var ferry = new Shipping.Ferry('BaWangWan', 'HongKong', 3220);
console.log(ferry);
