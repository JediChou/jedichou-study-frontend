module.exports = function() {
    this.name = "operator";
    this.version = "1.1.2";
    this.add = function(a, b) { return a+b;};
    this.sub = function(a, b) { return a-b;};
};
