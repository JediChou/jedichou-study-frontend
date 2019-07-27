// File: page020-1.js
// Description: check type

// define a function
var call = function(msg) {
    console.log(msg);
}

// define a object
var caller = new Object();

// define a function to handler
function hanlder(method, message) {
    if (typeof method == 'function') {
        method(message);
    } else {
        var method_name = method.toString();
        var msg = method_name + " is not a function";
        console.log(msg);
    }
}

// call handler function to check js features.
hanlder(call, 'all is right !');
hanlder(caller, 'haha, can not output this message');