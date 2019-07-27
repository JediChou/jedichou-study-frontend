// File: pg022-2.js
// Description: variable scope

var variable = 'out';
function func() {
    var variable = 'in';
    console.log(variable);
}
func();
console.log(variable);