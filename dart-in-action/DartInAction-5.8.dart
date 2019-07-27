// Dart in Action
// Listing 5.8 Complete functions.dart source file

// Indicates that this file is part of loglib library
part of loglib;

_logMsg(msg) {
	print(msg);
	_ServerLogger serverLogger = new _ServerLogger();
	serverLogger.send(msg);
}

info(msg)  => _logMsg("INFO $msg");
warn(msg)  => _logMsg("WARN $msg");
debug(msg) => _logMsg("DEBUG $msg");

