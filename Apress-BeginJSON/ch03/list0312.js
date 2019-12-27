// Ref: Apress Beginning JSON
// Listing 3-12. obtainning matched substrings
// Jedi Chou, 2015.3.7 19:40
var str = 'username=ben&clickedbutton=false';
var strObj = new String(str);
var stringMatches = strObj.match('username');
console.log(stringMatches);
var patternMatches = strObj.match( /[^&]+/g );
console.log(patternMatches);