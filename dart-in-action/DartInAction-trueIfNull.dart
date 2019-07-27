// From Dart in Action, page 9
// As an example of how you can benefit from using optional
// typing, consider the following block of code, which has
// a trueIfNull() function that takes two parameters and
// return true if both are null (and false if not).

bool trueIfNull(int a, int b) { return a == null && b == null;}
main() {
	final bool nums = trueIfNull(1, 2);
	final bool strings = trueIfNull("Hello ", null);
	print("$nums");
	print("$strings");
}
