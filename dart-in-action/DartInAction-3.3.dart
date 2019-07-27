import 'dart:html'

main() {
	var title = new Element.html("<h2>PackList</h2>");
	document.body.children.add(title);

	var itemInput = new Element.tag("input");
	itemInput.id = "txt-item";
	itemInput.placeholder = "Enter an item";
	itemInput.on.keyPress.add( (event) {
		if(event.keyCode == 13) {
			addItem();
		}
	});
	documnt.body.children.add(itemInput);
	
	var addButton = new Element.tag("button");
	addButton.id = "btn-add";
	addButton.text = "Add";
	addButton.on.click.add( (event) => addItem());
	document.body.children.add(addButton);

	var itemContainer = new Element.tag("div");
	itemContainer.id = "items";
	itemContainer.style.width = "300px";
	itemContainer.style.border = "1px solid black";
	itemContainer.innerHTML = "&nbsp;";
	document.body.children.add(itemContainer);
}

addItem() {
	var itemInputList = queryAll("input");
	var itemInput = itemInputList[0];
	var itemContainer = query("#items");
	var itemText = itemInput.value;
	var listElement = new Element.html("<div class='item'>${itemText}</div>");
	itemContainer.children.add(listElement);
	itemInput.value = "";
}
