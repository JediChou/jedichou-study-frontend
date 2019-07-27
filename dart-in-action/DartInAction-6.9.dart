// Dart in Action
// Listing 6.9 Using factory constructor to return an existing object from cache

// factory keyword identifies constructor as factory constructor
class EnterpriseAuthService {

	// Tries to get existing object from cache
	var authService = getFromCache(server, port);

	// If no matching object is returned from the cache,
	// creates a new one adds it to cache for later reuse
	if( authService == null) {
		authService = new EnterpriseAuthService();
		// snip: set values on authService and connect
		
		addToCache(authService, server, port);
	}

	// Returns object. Caller has no knowledge of whether
	// it is been returned from cache or newly created.
	return authService;
}
