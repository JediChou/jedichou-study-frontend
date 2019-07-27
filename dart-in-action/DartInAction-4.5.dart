// Dart in Action
// Listing 4.5 Storing anonymous functions in a list

main() {
	List taskList = new List();

	//////////////////////////////////////////////////////////
	// loop style of dart
	// taskList.add(1);
	// taskList.add(2);
	// taskList.forEach((value){ print("forEach: $value"); });
	// for(final value in taskList) { print("final: $value"); }
	// for(var value in taskList) { print("var: $value"); }

	taskList.add( (item) => item.pour() );
	taskList.add( (item) {
		item.level();
		item.store();
	});

	var aggregate = new aggregate();
	for(final task in taskList) {
		task(aggregate);
	}
}
