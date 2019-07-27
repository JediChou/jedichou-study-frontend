// File: pg029.js
// Description: create a js object, and bind an attribute

// create an object
var jack = new Object();
jack.name = 'jack';
jack.age = 26;
jack.birthday = new Date(1984, 4, 5);

// create another object
var address = new Object();
address.street = "Huang Quan Road";
address.xno = '135';

// bind address
jack.address = address;

// output
for (key in jack)
    console.log(key + ': ' + jack[key]);