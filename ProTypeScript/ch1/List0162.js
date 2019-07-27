// File: List0162.ts
// Ref: Apress Pro TypeScript
// Listing 1-62. Type constraints
var Personalization = (function () {
    function Personalization() {
    }
    Personalization.greet = function (obj) {
        return 'Hello ' + obj.name;
    };
    return Personalization;
}());
var GuangDong = (function () {
    function GuangDong() {
        this.name = 'GuangDong';
    }
    return GuangDong;
}());
var HuBei = (function () {
    function HuBei() {
        this.name = 'Hubei';
    }
    return HuBei;
}());
var ShanDong = (function () {
    function ShanDong() {
        this.name = 'ShanDong';
    }
    return ShanDong;
}());
// create some instances
var gd = new GuangDong();
var hb = new HuBei();
var sd = new ShanDong();
// call static method.
console.log(Personalization.greet(gd));
console.log(Personalization.greet(hb));
console.log(Personalization.greet(sd));
