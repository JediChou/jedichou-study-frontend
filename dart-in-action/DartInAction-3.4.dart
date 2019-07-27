// Dart in Action
// Listing 3.4 Basic class structure
class PackItem {
	var itemText;	// itemText property
	var uiElement;	// (Currently uninitialized) UI element that will be attached to UI

	// Constructor that accepts single
	// itemText parameter (which also
	// initializes itemText property)	
	PackItem(this.itemText) {
		// empty constructor body
	}
}
