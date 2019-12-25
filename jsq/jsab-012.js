function duplicates(arr) {
    dict = [];
    arr.forEach(elt => {
    });
}

var dict = {keys:[], vals:[]};
dict.add = function(key, val) {
    this.keys = this.keys.concat([key]);
    this.vals = this.vals.concat([val]);
}
dict.check = function(key) {
    return this.keys.indexOf(key);
}
dict.set = function(key, val) {
    if (idx = this.check(key))
        this.vals[idx] = val;
    else
        this.add(key, val);
}

dict.add(1, 1);
dict.add(7, 3);
dict.set(0, 2)

console.log(dict.keys);
console.log(dict.vals);
console.log(dict.check(6));

// arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];
// fact = duplicates(arr);
// expected = [1,3,4];
// console.log(fact);
// console.log(expected);
// console.log(fact == expected);