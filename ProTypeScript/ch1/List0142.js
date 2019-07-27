// File: List0142.js
// Ref: Apress Pro TypeScript
// Listing 1-42. Lost context
var ClickCounter = (function () {
    function ClickCounter() {
        this.count = 0;
    }
    ClickCounter.prototype.registerClick = function () {
        this.count++;
        console.log(this.count);
    };
    return ClickCounter;
}());
var cc = new ClickCounter();
// Jedi: you can bind, but get wrong result.
document.getElementById('target').onclick = cc.registerClick;
