// Dart in Action
// Listing 1.6 Functions as first-class objects

// 1. Declares function using function shorthand
String sayHello(name) => "Hello $name";

main() {
	// 2. Assigns function into variable
	var myFunc = sayHello;
	print(myFunc("World"));	// Call function stored in variable

	// Defines anonymous function
	var mySumFunc = (a, b) { return a + b; };
	var c = mySumFunc(1, 2);
	print(c);
}
