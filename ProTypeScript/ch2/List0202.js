// File: List0202.ts
// Ref: Apress Pro TypeScript
// Listing 2-2. Using and avoding equivalence
var CustomerId = (function () {
    function CustomerId(id) {
        this.id = id;
    }
    CustomerId.prototype.getValue = function () { return this.id; };
    return CustomerId;
}());
var ProductId = (function () {
    function ProductId(id) {
        this.id = id;
    }
    ProductId.prototype.getValue = function () { return this.id; };
    return ProductId;
}());
var Example = (function () {
    function Example() {
    }
    Example.avoidAccidentalEquivalence = function (id) {
        // Implementation
        console.log("avoidAccidentalEquivalence " + id.getValue());
    };
    Example.useEquivalence = function (id) {
        // Implementation
        console.log("useEquivalence " + id.getValue());
    };
    return Example;
}());
var customerId = new CustomerId(1);
var productId = new ProductId(5);
Example.avoidAccidentalEquivalence(customerId);
Example.useEquivalence(customerId);
Example.useEquivalence(productId);
