// Dart in Action
// Listing 6.6 Using EnterpriseAuthService with muliple interfaces

// Expects instance of AuthService
User doLogon(AuthService authService, String username, String password) {
	return authService.auth(username, password);
}

// Expects instance of RolesService
showRoles(RolesService rolesService, User user) {
	List roles = rolesService.getRoles(user);
	print(roles);
}

main() {
	// Creates instance of EnterpriseAuthService
	var entService = new EnterpriseAuthService();

	// EnterpriseAuthService has "is-an" relationship
	// with AuthService
	var user = doLogon(entService, "Alice", "password");

	// EnterpriseAuthService has "is-a" relationship
	// with RolesService
	showRoles(entService, user);
}
