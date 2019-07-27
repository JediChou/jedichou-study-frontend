// Dart in Action
// Listing 5.4 Adding logging method calls to the PackList application

class PackItem {

	// ... snip ...

	PackItem(this.itemText) {
		if ( itemText.length == ) {
			warn("User added an empty item");
		} else {
			info("User added an item $itemText");
		}
	}

	DivElement get uiElement {
		if (_uiElement == null) {
			_uiElement = new Element.tag("div");
			_uiElement.classes.add("item");
			_uiElement.text = this.itemText;

			// Existing event listener function
			_uiElement.on.click.add( (event) => isPacked = !isPacked);

			// Adds second click event listener, which logs "item
			// updated" message
			_uiElement.on.click.add( (event) => info("Item updated");
		}
		return _uiElement;
	}
	// ... snip ...
}
