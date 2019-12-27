// Ref: Apress Beginning JSON
// Listing 3-11. locating the index of the last matched substring
// Jedi Chou, 2015.3.7 19:39
var str = 'side beside besides the ocean';
var strObj = new String(str);
var index = strObj.lastIndexOf('side');

if (index >-1) console.log(index);
else console.log( 'substring does not occur' );