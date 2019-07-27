// File: List0204.js
// Ref: Apress Pro TypeScrip
// Listing 2-4. Compiled JavaScript code

var OrderedArray = (function () {
    function OrderedArray(comparer) {
        this.comparer = comparer;
        this.items = [];
    }
    OrderedArray.prototype.add = function (item) {
        this.items.push(item);
        this.items.sort(this.comparer);
    };
    OrderedArray.prototype.getItem = function (index) {
        if (this.items.length > index) {
            return this.items[index];
        }
        return null;
    };
    return OrderedArray;
}());

var orderedArray = new OrderedArray();
orderedArray.add(5);
orderedArray.add(1);
orderedArray.add(3);

for (var i = 0; i < 3; i++) {
    var temp = orderedArray.getItem(i);
    console.log(temp);
}
