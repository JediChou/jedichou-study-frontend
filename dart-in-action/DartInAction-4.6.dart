// Dart in Action
// Listing 4.6 Recursive, typed, named function

main() {

	// Function is declared with name mixer(), with return
	// and parameter type information provided, and assigned
	// to variable mix4.
	var mix4 = Ingredient mixer(Ingredient item1, Ingredient item2) {
		if( item1 is Sand) {
			// Function name mixer() is in scope,
			// which allows you to use recursion.
			return mixer(item2, item1);
		} else {
			return item1 + item2;
		}
	}

	var sand = new Sand();
	var gravel = new Gravel();

	// Pass in mix4() function,
	// which is your reference
	// to mixer() function
	combineIngredients(mix4, sand, gravel);
}
