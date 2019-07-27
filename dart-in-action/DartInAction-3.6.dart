// Dart in Action
// Listing 3.6 Adding a uiElement getter

class PackItem {
	// snip ... other code
	var _uiElement;

	DivElement get uiElement {
		if (_uiElement == null) {
			_uiElement = new Element.tag("div");

			// Add CSS .item class
			// so it gets a pointer mouse style
			_uiElement.classes.add("item");

			// sets text that you'll show on item
			_uiElement.text = this.itemText;
		}
		return _uiElement;
	}
	
}
