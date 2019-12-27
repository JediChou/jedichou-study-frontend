// Ref: Apress Beginning JSON
// Listing 4-8. 
//   examples of valid string values as defined by the json grammar
// Jedi Chou, 2016.3.7 20:25

//absent of unicode
console.log("");

//random unicode characters
console.log("Σ", "∢");

//use of escaped character to display double quotes;
console.log(" \" \" ");

//use of \u denotes a unicode value
console.log("\u22A0"); // outputs ⊠

//a series of valid unicode as defined by the grammar
console.log("\u22A0 ⊠ \" Σ \n");