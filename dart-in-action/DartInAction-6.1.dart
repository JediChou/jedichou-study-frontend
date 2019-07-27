// Dart in Action
// Listing 6.1 A simple User class

// Class name
class User {
	// Private field, denoted by underscroe
	String _forename;

	// Public getter and setter, accessing private _forename field
	String get forename => _forename;
	set forename(value) => _forename = value;

	// Public field, defined as String
	String surname;

	// Method returning forename and surname as String
	String getFullName() {
		return "$forename $surname";
	}
}

main() {
	// Creates instance of User class
	var user = new User();

	// Sets value of fields
	user.forename = "Alice";
	user.surname  = "Smith";

	// Calls method on user instance
	print(user.getFullName());
}
