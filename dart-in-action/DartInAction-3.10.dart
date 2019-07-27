// Dart in Action
// snip boilerplate imports

main() {
	useHtmlConfiguration();
	
	test("PackItem constructor", () {
		var item = new PackItem("Towel");
		expect.isNotNull(item);
	});

	test("PackItem itemText property", () {
		var item = new PackItem("Towel");
		expect(item.itemText, equals("Towel"));
	});
}
