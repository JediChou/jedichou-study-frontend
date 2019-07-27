// Dart in Action
// Listing 6.10 Implementing a cache with static members

class EnterpriseAuthService {
	// ... snip other methods and properties

	// Users private static map as cache
	static Map _cache;

	// Public static getter initializes
	// cache if required and returns it
	static Map get cache {
		if (_cache == null) {
			_cache = new Map();
		}
		return _cache;
	}

	// getFromCache() returns instance if it
	// exists in cache (or null if it doen`t)
	static EnterpriseAuthService getFromCache(String server, int port) {
		var key = "$server:$port";
		return cache[key];
	}

	// addToCache() adds instance to cache
	static addToCache(EnterpriseAuthService authService, String server, int port) {
		var key = "$server:$port";
		cache[key] = authService;
	}

	factory EnterpriseAuthService.usingServer(String server, int port) {
		var authService = getFromCache(server, port);
		if (authService == null) {
			authService = new EnterpriseAuthService();
			// snip: set values on authService and connect
			
			addToCache(authService, server, port);
		}
		return authService;
	}

}
