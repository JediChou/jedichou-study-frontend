// File: pg024-1.js
// Description: . operator
// Execute: node pg024-1.js

var obj = {
    field: 'self',
    printInfo: function(){
        console.log(this.field);
    },
    outter: {
        inner: 'inner text',
        printInnerText: function() {
            console.log(this.inner);
        }
    }
}

// you can use . feature to execute a nest object method
obj.outter.printInnerText();