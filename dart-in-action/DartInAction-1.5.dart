// Listing 1.5 Libraries and source files

// Declares that file is a library
library "my_library"

// Import another library from a different folder
import "../lib/my_other_library.dart";

// Includes other source files (containning Greeter class)
part "greeter.dart";
part "leaver.dart";

// Defines function in top-level library scope
greetFunc() {
	var g = new Greeter();	// Uses class from greeter.dart file
	sayHello(g);	// Calls function in top-level scope of my_other_library
}
