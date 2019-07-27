// Dart in Action
// Listing 7.5 Making User an abstract class

// Delcares class as abstract because you aren`t providing
// an implementation of checkPasswordHistory()
abstract class User {

	User (String this._username) {}

	String _username;
	String _existingPasswordHash;

	String get username => _username;

	String emailAddress;

	// Method definition without implementation
	void checkPasswordHistory(String newPassword);

	bool isPasswordValid(String newPassword) {
		// validate that the newPassword isn`t the same
		// as the existing password by comparing hashes

		// Although implementation for checkPasswordHistory()
		// doesn`t exist in the class, you can call it,
		// because it will be implemented by a child class.
		checkPasswordHistory(newPassword);
	}
}
