// Dart in Action
// Listing 3.7 Adding the isPacked property, getter, and setter

class PackItem {
	// ...snip... other code
	var _isPacked = false;
	
	// getter and setter
	bool get isPacked => _isPacked;
	set isPacked(value) {
		_isPacked = value;
		if(_isPacked == true) {
			uiElement.classes.add("packed");
		} else {
			uiElement.classes.remove("packed");
		}
	}
	
}
