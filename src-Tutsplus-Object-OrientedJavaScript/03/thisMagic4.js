// file: thisMagic4.js
// date: 2019.3.27
// desc: run it at chrome pls

window.name = "Jedi Chou"
window.globalGreet = function() {
  return "Hi, everybody. My name is " + this.name;
}

var person = {
  name: name,
  greet: window.globalGreet,
}