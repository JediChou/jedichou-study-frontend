// Ref: Apress Beginning JSON
// Listing 3-9. if the index of -1 returned, the substring is nor present
// Jedi Chou, 2015.3.7 19:33
var str = 'hello world';
var strObj = new String(str);
var index = strObj.indexOf(';');

if (index >-1) console.log('true');
else console.log( 'substring does not occur' );
