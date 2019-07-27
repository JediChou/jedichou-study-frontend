// Dart in Action
// Listing 7.4 logon.dart: overriding properties inherited from the parent class

class EnterpriseUser extends User {

	// Passes functionality straight through to
	// parent implmentation
	String get username => supper.username;

	void set username(String value) {
		if (value.length < 4) {
			throw new ArgumentError("Error: username is < 5 chars");
		}
		// Passes value to parent property
		super.username = value;
	}
}
