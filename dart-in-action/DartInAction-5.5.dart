// Dart in Action
// Listing 5.5 packlist.dart usring the Logger class imported from loglib

import "../loglib/loglib.dart";

main() {
	debug("started building UI");
	// ... snip building the UI
	
	// Creates new instances of Logger
	// class that is imported from loglib
	var logger = new Logger();

	// Calls log() method on Logger class
	logger.log("Finished building UI");
	// ... snip ...
}
