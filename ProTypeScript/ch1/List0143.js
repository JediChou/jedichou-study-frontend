// File: List0143.ts
// Ref: Apress Pro TypeScript
// Listing 1-43. Preserving context with a property and an arrow function
var Counter = (function () {
    function Counter() {
        var _this = this;
        this.count = 0;
        this.click = function () {
            _this.count++;
            console.log(_this.count);
        };
    }
    return Counter;
}());
var cc = new Counter();
for (var i = 0; i < 10; i++)
    cc.click();
