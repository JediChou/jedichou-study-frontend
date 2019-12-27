// Ref: Apress Beginning JSON
// Listing 3-16. separating a comma-delimited string
// Jedi Chou, 2016.3.7 20:01

var strObj = new String('ben,mike,ivan,kyle');
console.log(strObj.split(','));

// Jedi: It is not a good practice
for(var index in strObj.split(','))
    console.log(index, strObj.split(',')[index]);