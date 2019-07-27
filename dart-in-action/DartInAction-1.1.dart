// Listing 1.1 String interpolation in Dart

void main() {
	// example 1
	var h = "Hello";
	final w = "World";
	print('$h $w');

	// example 2
	var helloWorld = "Hello " + "World";
	print(helloWorld);

	// example 3
	print("${helloWorld.toUpperCase()}");
	print("The answer is ${5 + 10}");

	// example 4
	var multiline = """
<div id='greeting'>
	"Hello World"
</div>""";
	print(multiline);

	// example 5
	var o = new Object();
	print(o.toString());
	print("$o");
}
