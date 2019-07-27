// Dart in Action
// Listing 3.5 Refactoring the addItem method to use your class

addItem() {
	var itemInputList = queryAll("input");
	var itemInput = itemInputList[0];
	var itemContainer = query("#items");

	// Creates instance with PackItem constructor
	var packItem = new PackItem(itemInput.value);

	// Gets uiElment property of class and adds it to itemContainer
	itemContainer.children.add(packItem.uiElement);
	itemInput.value = "";
}
