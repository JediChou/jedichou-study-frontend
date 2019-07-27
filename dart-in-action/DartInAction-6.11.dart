// Dart in Action
// Listing 6.11 Creating a const constructor

class AuthError {
	final prefix = "Error: ";
	final String _message;
	final int _code;

	// const keyword prefixes AuthError
	const AuthError(String message, int code) : _message = message, _code = code;

	// Constructor body isn't allowed with const constructor
	String get errorMessage => "$prefix [$code] $message";
}
