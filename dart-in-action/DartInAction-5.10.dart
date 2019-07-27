// Dart in Action
// Listing 5.10 Library containing a main() method

library loglib;

import "dart:html";

part "classes.dart"
part "functions.dart";

// main() appears in library
main() {
	// main() now calls replay() function
	replay("http://www.someserver.com/logMessages");
}

replay(url) {
	// snip ... load msgsFromUrl list
	for(msg in msgFromUrl) {
		// replay() calls private _logMsg() function
		_logMsg(msg);
	}
}
