// Dart in Action
// Listing 7.8 Implmenting nonSuchMethod()

class User {

	// Declares noSuchMethod()
	noSuchMethod(String name, List args) {
		// Prints name of method called and
		// the number of arguments passed in
		print("$name, ${args.length}");
	}

}
