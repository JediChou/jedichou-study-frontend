// Dart in Action
// Listing 5.3 Generated JavaScript extract of the Packlist app and loglib library

...snip...
// ********** Library loglob **********
// ********** Code for top level **********
function debug(message) {
	// debug() function exists in loglib section.
	return print$(("Debug: " + message));
}

// *********** Library C:\DartInAction\PackList ***********
// *********** Code for PackItem ***********
// *********** Code for top level ***********
function main() {
	// But debug() only exists because
	// it is called elsewhere in the code
	debug("Starting building UI");
	// ... snip ...
}
