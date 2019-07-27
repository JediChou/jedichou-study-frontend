// File: pg022-3.js
// Description: variable scope

var variable = 'out';
function func() {
    variable = 'in';
    console.log(variable);
}
func();
console.log(variable);