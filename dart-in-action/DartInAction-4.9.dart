// Dart in Action
// Listing 4.9 Creating a closure with a function as a return type

getShovel() {
	// Creates mud in shovel()
	var stickyMud = new Mud();

	// Delcare mix() function that use stickyMud
	var mix = (item1, item2) {
		return stickyMud + item1 + item2;
	}

	// Returns mix()
	return mix;
}

main() {
	
	// Calls getShovel(), which return mix(), still
	// containing a reference to stickyMud
	var mixFunc = getShovel();

	var sand = new Sand();
	var cement = new Cement();

	// Uses mix() to ensure that cement and sand
	// are mixed with more than each other
	var muddyMortar = mixFunc(sand, cement);

}
