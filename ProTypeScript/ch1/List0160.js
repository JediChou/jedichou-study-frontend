// File: List0160.ts
// Ref: Apress Pro TypeScript
// Listing 1-60. Generic interfaces
var CustomerId = (function () {
    function CustomerId(customerIdValue) {
        this.customerIdValue = customerIdValue;
    }
    Object.defineProperty(CustomerId.prototype, "value", {
        get: function () {
            return this.customerIdValue;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerId;
}());
var Customer = (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    return Customer;
}());
var CustomerReppsitory = (function () {
    function CustomerReppsitory(customers) {
        this.customers = customers;
    }
    CustomerReppsitory.prototype.getById = function (id) {
        return this.customers[id.value];
    };
    CustomerReppsitory.prototype.persist = function (customer) {
        this.customers[customer.id.value] = customer;
        return customer.id;
    };
    return CustomerReppsitory;
}());
