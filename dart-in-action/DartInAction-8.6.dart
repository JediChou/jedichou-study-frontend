// Dart in Action
// Listing 8.6 Using the dart:json library to convert between maps and strings

import "dart:json";

main() {
	// Creates JSON string
	var jsonString = "{'charlieKey':'2012-07-23', 'aliceKey':'2012-08-16'}";

	// Parse JSON into a Map object
	Map lastLogonMap = JSON.parse(jsonString);

	// Access value in map by key
	print(lastLogonMap["charlieKey"]);

	// Converts map back into string
	jsonString = JSON.stringify(lastLogonMap);
}
