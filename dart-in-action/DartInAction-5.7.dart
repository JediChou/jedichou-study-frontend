// Dart in Action
// Listing 5.7 loglib.dart with a private function

// Jedi feel: Use design pattern to improve readable.
// Jedi Idea: Use UML to design app and translate to dart or dart library.

library loglib;

// New private _logMsg function
// is accessible only from within
// same library
_logMsg(message) {
	// Creates new instance every time a message is
	// logged, for example only
	_ServerLogger serverLogger = new _ServerLogger();
	serverLogger.send(message);
}

info(  message) => _logMsg("INFO $message");
warn(  message) => _logMsg("WARN $message");
debug( message) => _logMsg("DEBUG $message");

class _ServerLogger {
	// ... snip ...
}

class Logger {
	// Existing Logger class now calls _logMsg
	log(Message) => _logMsg(message);
}
