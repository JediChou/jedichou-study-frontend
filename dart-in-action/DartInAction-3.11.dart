// Dart in Action
// Listing 3.11 Creating a custom PackList matcher

// snip boilerplate

class CustomMatcher extends BaseMatcher {
	PackItem _expected;
	
	CustomMatcher(this._expected);

	bool matches(PackItem actual) {
		if( _expected.itemText == actual.itemText) {
			return true;
		} else {
			return false;
		}
	}

	Description describe(Description description) {
		description.add("itemText");
	}
}

main() {
	useHtmlConfiguration();
	test("PackItem custom", () {
		var packItem1 = new PackItem("Towel");
		var packItem2 = new PackItem("Towel");
		expect(packItem2, new CustomerMatch(packItem1));
	});
}
