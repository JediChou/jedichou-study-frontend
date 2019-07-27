// Dart in Action
// Listing 8.3 Extracting the first two items from a collection using an iterator

// Gets new iterator positioned before first item
Iterator iterator = user.permission.iterator();

// Creates variable to store permissions
var perm1 = null;
var perm2 = null;

// Checks whether there`s a next item to return
if (iterator.hasNext) { perm1 = iterator.next(); }

// Checks for and gets second item
if (iterator.hasNext) { perm2 = iterator.next(); }
