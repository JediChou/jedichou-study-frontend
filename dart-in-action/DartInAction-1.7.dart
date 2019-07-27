// Dart in Action
// Listing 1.7 Interacting with the browser

// Imports dart:html library
import 'dart:html';

void main() {
	// Creates new button element
	var button = new Element.tag("button");
	button.text = "click me";
	button.on.click.add((event){
		List buttonList = queryAll("button");
		window.alert("There is ${buttonList.length} button");
	});
}
