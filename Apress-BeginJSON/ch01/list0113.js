// Ref: Apress Beginning JSON
// Listing 1-13. Comparing Operands
// Jedi Chou, 2016.3.7 14:08
 
// evaluates to true:
// after type coerciton, 3 is less than or equal to 3
console.log( 3<=3 );

// evaluates to true:
// after type coercion, '3' and '3' are found to be equal
console.log( 3=='3' );

// evaluates to true:
// after type coercion, 3 and 3 are found to be equal
console.log( 3==3 );

// evaluates to true:
// 3 and 3 are the same
console.log( 3===3 );

// evaluates to false:
// 3 does not equal '3'
console.log( 3==='3' );

// evaluates to false:
// 3 and '3' are equal
console.log( 3 != '3' );

// evaluates to true:
// 3 does not equal '3'
console.log( 3!=='3' );
