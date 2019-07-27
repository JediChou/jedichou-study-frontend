// File: List0129.ts
// Ref: Apress Pro TypeScript
// Listing 1-29. Specialized overload signature
var RandomHanler = (function () {
    function RandomHanler() {
    }
    return RandomHanler;
}());
var ReversedHandler = (function () {
    function ReversedHandler() {
    }
    return ReversedHandler;
}());
var Hanlder = (function () {
    function Hanlder() {
    }
    return Hanlder;
}());
var HandlerFactory = (function () {
    function HandlerFactory() {
    }
    HandlerFactory.prototype.getHandler = function (type) {
        // implementation signature
        switch (type) {
            case 'Random':
                return new RandomHanler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new Hanlder();
        }
    };
    return HandlerFactory;
}());
// use it
var factory = new HandlerFactory();
console.log(factory.getHandler('Random'));
console.log(factory.getHandler('Reversed'));
console.log(factory.getHandler('Other'));
