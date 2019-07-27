// Dart in Action
// Listing 7.1 A new User class

class User {

	// Constructor matching that defined on the interface,
	// initializing _username property
	User (String this._username) {}

	// Private properties
	String _username;
	String _existingPasswordHash;

	// Getter method to return private username
	String get username => _username;

	// Property to read and write email address
	String emailAddress;

	// Method to check new password
	// against existing password
	bool isPasswordValid(String newPassword) {
		// ... some validation code ...
	}
}
