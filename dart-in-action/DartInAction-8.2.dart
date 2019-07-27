// Dart in Action
// Listing 8.2 Returning a list of AdminPermssions

// Returns collection that`s a list of AdminPermissions
Collection extractAdminPermission(User user) {

	// Predicate returns true if currentPermission is an
	// instance of AdminPermission. This causes currentPermission
	// to added to result collection.
	return user.permission.filter( (currentPermission) {
		return currentPermission is AdminPermission;
	});

}
