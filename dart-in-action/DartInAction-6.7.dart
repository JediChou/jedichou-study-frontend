// Dart in Action
// Listing 6.7 logon_library.dart: getters, setters, and properties in interfaces

library logonlib;

abstract class AuthService {
	User auth(String username, String password);
	bool get isConnected;				// Define property getter using get
	void set isConnected(bool value);	// Define property setter using set
}

abstract class RoleService {
	List getRoles(User user);
	bool isConnected;	// Defines field
}

class EnterpriseAuthService implments AuthService, RoleService {
	bool _isConnected;
	bool get isConnected => _isConnected;
	void set isConnected(bool value) => _isConnected = value;

	// snip auth() and getRoles()
}
