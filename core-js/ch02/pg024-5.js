// File: pg024-5.js
// Description: must use [] to execute object method

var ref = {
    id: 'reference1',
    func: function() {
        return this.id;
    }
};

var obj = {
    id: 'object1',
    'self.ref': ref  // a special field
};

// must use []
console.log(obj['self.ref'].func());