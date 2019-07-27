// Listing 1.3 Every class has an implicit interface

// Welcome class can be created and inherited from...
class Welcomer {
	printGreeting() => print("Hello ${name}");
	var name;
}

// ... but also has an implied interface that
// Greeter implements
class Greeter implements Welcomer {
	printGreeting() => print("Greetings ${name}");
	var name;
}

// Expectes Welcomer argument
void sayHello(Welcomer welcomer) {
	welcomer.printGreeting();
}

main() {
	var welcomer = new Welcomer();
	welcomer.name = "Tom";
	sayHello(welcomer);

	var greeter = new Greeter();
	greeter.name = "Tom";
	sayHello(greeter);
}
