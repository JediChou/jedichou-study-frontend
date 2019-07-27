// Dart in Action
// Listing 6.4 Defining an explicit interface

// Defines abstract AuthService class
abstract class AuthService {
	// An auth() method definition without an implementation
	User auth(String username, String password);
}

// Implements AuthService
class EnterprieseAuthService implements AuthService {
	// Implemented version of auth()
	User auth(String username, String password) {
		// some enterprise implementation
	}
}
