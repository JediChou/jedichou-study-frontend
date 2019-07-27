// Dart in Action
// Listing 4.8 Using typedef to declare a function signature

// typedef declares custom function type MixFunc
typedef Ingredient MixFunc(Ingredient, Ingredient);

// Use new MixFunc type to strongly type parameter
Ingredient combinateIngredients(MixFunc, item1, item2) {
	return MixFunc(item1, item2);
}
