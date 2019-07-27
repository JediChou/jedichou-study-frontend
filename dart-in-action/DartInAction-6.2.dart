// Dart in Action
// Listing 6.2 logon.dart using an example AuthService

// Imports LogonLibrary library with implementation details
// hidden using library privacy
import "logon_library.dart"

// Passes into function an instance of a class that looks
// like AuthService
User doLogon(AuthService authSvc, String username, String password) {
	// auth function forms interface point that AuthService
	// implements.
	User user = authSvc.auth(username, password);
	
	// Prints "true" or "false" depending on whether service
	// has authenticated user
	print("User is autherticated:${user == null}");
	return user;
}

// Example click handler that calls doLogon()
buttonClickHandler(event) {
	AuthService authSvc = new AuthService();
	User user = doLogon(
		authSvc,
		query("#username").value,
		query("#password").value
	);
}
