// Dart in Action
// Listing 6.3 Using a mock authentication service

import "log_library.dart";

// Mock class implements another class`s implied interface
class MockAuthService implements AuthService {
	// Mock class`s implementation of auth()
	User auth(String username, String password) {
		var user = new User();
		user.forename = "testForename";
		user.surname = "testSurname";
		return user;
	}
}

User doLogon(AuthService authSvc, String username, String password) {
	// Users mock implementation
	User user = authSvc.auth(username, password);
	print("User is authenticated: ${user == null}");
	return user;
}

main() {
	// Uses mock implementation in doLogon() call
	AuthService authService = new MockAutherService();

	var user = doLogon(authService, "Alice", "password");
	print(user.forename);
	print(user.surname);
}
