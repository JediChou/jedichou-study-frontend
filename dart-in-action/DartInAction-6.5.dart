// Dart in Action
// Listing 6.5 Implmenting multiple interfaces

// New RolesService class
abstract class RolesService {
	List getRoles(User user);
}

abstract class AuthService {
	User auth(String username, String password);
}

// Implements AuthService and RolesService
class EnterpriseAuthService implements AuthService, RolesService {
	User auth(String username, String password) {
		// some enterprise implementation
	}
	
	// Provides implementation of getRoles()
	List getRoles(User user) {
		// some enterprise implementation
	}
}
