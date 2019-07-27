// Dart in Action
// Listing 1.4 Factory constructors for default implementations

// Defines interface
abstract class IGreetable {
	// Provides method that must be implmented
	String sayHello(String name);

	// Factory constructor returns instance of Greeter
	factory IGreetable() {
		return new Greeter();
	}
}

// Greeter implments IGreetable interface
class Greeter implements IGreetable {
	sayHello(name) {
		return "Hello $name";
	}
}

void main() {
	// Greeter 
	IGreetable myGreetable = new IGreetable();
	var message = myGreetable.sayHello("Dart");
	
	// Output
	print(message);
}
