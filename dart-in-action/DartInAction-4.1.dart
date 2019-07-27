// Dart in Action
// Listing 4.1 Mixing concrete in Dart

// Both mix() and measureQty() function output ingredients.
Ingredient mix(Ingredient item1, Ingredient item2) {
	return item1 + item2;
}

// measureQty() returns a new ingredient by
// calculating a proportion based on number
// of cement bags.
Ingredient measureQty(
	Ingredient ingredient, int numberOfCementBags, int proportion) {
	return ingredient * (numberOfCementBags * proportion);
}

void lay(ConcreteMix concreteMix) {
	// snip - implementation not required
}

main() {
	
	// Enter staring number of bags of cement.
	Ingredient cement = new Cement();
	cement.bags = 2;
	print(cement.bags);

	// Calculate amount of other ingredients based on
	// number of bags of cement.
	Ingredient sand = measureQty(new Sand(), cement.bags, 2);
	Ingredient gravel = measureQty(new Gravel(), cement.bags, 3);

	// Mix ingredients, using output of
	// previous function as input to the next.
	Ingredient mortar = mix(cement, sand);
	Ingredient dryConcrete = mix(mortar, gravel);

	ConcreteMix wetConcrete = new ConcreteMix(dryConcrete, new Water());
	lay(wetConcrete);
}
