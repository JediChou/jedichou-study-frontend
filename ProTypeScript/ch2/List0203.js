// File: List0203.ts
// Ref: Apress Pro TypeScript
// Listing 2-3. TypeScript ordered array class
// define OrderedArray class
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
// create a instances and add some number
var orderedArray = new OrderedArray();
orderedArray.add(5);
orderedArray.add(1);
orderedArray.add(3);
// output
for (var i = 0; i < 3; i++) {
    var temp = orderedArray.getItem(i);
    console.log(temp);
}
