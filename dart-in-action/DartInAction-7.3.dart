// Dart in Action
// Listing 7.3 EnterpriseUser overriding functionality from parent User class

class EnterpriseUser extends User {

	// Overrides functionality from parent class by
	// providing new version of method
	bool isPasswordValid(String newPassword) {
		// snip ... compare against last 5 passwords

		// Calls underlying version in parent class by
		// referring to parent class with super keyword
		return super.isPasswordValid(newPassword);
	}
}
