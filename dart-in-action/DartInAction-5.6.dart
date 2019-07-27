// Dart in Action
// Listing 5.6 mixed_loglib.dart: library both public and private classes

library mixed_loglib;

// Logger class is public and can be directly referenced in
// calling code.
class Logger {
	// Method on public Logger class can still return a
	// private _ServerLogger instance, which can be used
	// by calling code but not directly referenced. 
	_ServerLogger getServerLogger() {
		return new _ServerLogger();
	}
}

// Private _ServerLogger class contains both public
// and private properties; this has no effect in the
// library because the whole class is private.
class _ServerLogger {
	var serverName;
	var _serverIp;
}
