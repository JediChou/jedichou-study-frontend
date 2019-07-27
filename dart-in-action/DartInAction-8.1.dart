// Dart in Action
// Listing 8.1 Permissions boilerplate code

// Base Permission class
class Permission {
	final String name;				// Field to store permission name
	const Permission(this.name);	// Constant constructor
}

// Child ReaderPermission class
class ReaderPermission extends Permission {
	const ReaderPermission(String name) : super(name);

	// Creates Reader permissions and assignes them to static variables
	static final ReaderPermission ALLOW_READ = const ReaderPermission("ALLOW_READ");
	static final ReaderPermission ALLOW_COMMENT = const ReaderPermission("ALLOW_COMMENT");
	static final ReaderPermission ALLOW_SHARE = const ReaderPermission("ALLOW_SHARE");
}

// Child AdminPermission class
class AdminPermission extends Permission {

	// Child AdminPermission class
	const ReaderPermission(String name) : super(name);
	
	// Creates Reader permissions and assignes them to static variables
	static final ReaderPermission ALLOW_EDIT = const ReaderPermission("ALLOW_EDIT");
	static final ReaderPermission ALLOW_DELETE = const ReaderPermission("ALLOW_DELETE");
	static final ReaderPermission ALLOW_CREATE = const ReaderPermission("ALLOW_CREATE");
}
