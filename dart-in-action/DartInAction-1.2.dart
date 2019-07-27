// Listing 1.2 A simple class in Dart

// class keyword defines new class
class Greeter {
	var greeting;	// Public property
	var _name;		// Private property denoted by _

	// public method
	sayHello() {
		// uses string interpolation
		return "$greeting ${this.name}";
	}

	// Getter and setter with shorted syntax
	get name => _name;
	set name(value) => _name = value;
}

main() {
	var greeter = new Greeter();
	greeter.greeting = "Hello ";
	greeter.name = "World";
	print(greeter.sayHello());
}
