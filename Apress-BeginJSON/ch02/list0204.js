// Ref: Apress Beginning JSON
// Listing 2-4. Comparing Notations
// Jedi Chou, 2016.3.7 15:40

var aBracketNotationCollectionA = new Object();
    aBracketNotationCollectionA['1'] = "1";
	console.log(aBracketNotationCollectionA['1']);

var aBracketNotationCollectionB = new Object();
	aBracketNotationCollectionB.1 = "1";  
	// throws a SyntaxError
	// SyntaxError: Unexpected number
