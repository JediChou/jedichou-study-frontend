// Ref: Apress Beginning JSON
// Listing 3-10. the index of the first matched substring is returned
// Jedi Chou, 2015.3.7 19:35
var str = 'side beside besides the ocean';
var strObj = new String(str);
var index = strObj.indexOf('side');

if (index >-1) console.log(index);
else console.log( 'substring does not occur' );