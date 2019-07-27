library loglib;

debug(message) => print("DEBUG: $message");
warn(message)  => print("WARN: $message");
info(message)  => print("INFO: $message");

class Logger {
	log(message) => print("LOG: $message");
}
