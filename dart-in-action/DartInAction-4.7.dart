// Dart in Action
// Listing 4.7 Function type strongly types a function variable or parameter

// mixFunc parameter is strongly type as a Function.
Ingredient combinateIngredients(Function mixFunc, item1, item2) {
	return mixFunc(item1, item2);
}

main() {
	
	// Stores function in mix variable,
	// which is strongly typed as a Function.
	Function mix = (item1, item2) {
		return item1 + item2;
	}

	var sand = new Sand();
	var gravel = new Gravel();

	// When you pass mix into combinateIngredients,
	// type checker can validate whether you are
	// providing a function as first parameter.
	combinateIngredients(mix, sand, gravel);

}
