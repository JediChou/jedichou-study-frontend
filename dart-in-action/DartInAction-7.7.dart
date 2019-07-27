// Dart in Action
// Listing 7.7 Overriding the toString() functionality from Object

class User {
	String username;
	
	// Decleares implementation of toString()
	String toString() {
		// Invokes class`s toString()
		var myType = super.toString();
		// returns "instance of 'user':alice"
		return "$myType: $username";
	}
}
