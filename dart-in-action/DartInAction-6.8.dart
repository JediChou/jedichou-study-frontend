// Dart in Action
// Listing 6.8 Using factory constructor for default implementations

abstract class AuthService {
	User auth(String username, String password);
	
	// It must return an instance of an object.
	// Jedi: cool ?
	factory AuthService() {
		return new EnterpriseAuthService();
	}
}
