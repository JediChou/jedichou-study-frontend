// Dart in Action
// Listing 4.4 Outer main() function uses the inner mix() function

main() {
	
	// Local function defined
	// as mix2(), which creates
	// a function object
	mix2(item1, item2) {
		return item1 + item2;
	}

	var cement = new Cement();
	var sand = new Sand();

	// Can pass mix2 function object into other
	// functions in the same way as other variables
	var mortar = combineIngredients(mix2, cement, sand);

	// Can also mix2() directly in declaring
	// functions scope
	var dryCement = mix(mortar, new Gravel());
}
