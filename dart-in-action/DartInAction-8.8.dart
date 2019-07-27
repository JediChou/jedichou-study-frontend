// Dart in Action
// Listing 8.8 User class that uses generic crendentials

// Defines class name as generic class
// with type placeholder <C>
class User<C> {

	// Declares List containing C
	List <C> credentials;

	// Constructor creates new insance of List of C.
	User() {
		credentials = new List <C>();
	}

	////////////////////////////////////////////////
	// Ensures that only types of C are passed into
	// methods

	addCredential (C credential) {
		this.credentials.add(credential);
	}

	bool containsCredential(C credential) {
		return this.credentials.some( (item) => item == credential);
	}

	// Returns classes that contain type C
	List<C> getCredentialsList() {
		return new List<C>.from(credentials);
	}
}
