// Dart in Action
// Listing 8.4 Different ways to create a list

// Creates literal extendable list from known values
List literal = [ReaderPermission.ALLOW_READ, ReaderPermission.ALLOW_SHARE];

// Adds new items to list
literal.add(ReaderPermission.ALLOW_COMMENT);

// prints: 3
print(literal.length);

// Create new, empty, growable list
List growable = new List();

// prints: 0
print(growable.length);

// Adds new items to list
growable.add(ReaderPermission.ALLOW_READ);
growable.add(ReaderPermission.ALLOW_SHARE);

// creates new fixed-size list
List fixedSize = new List(2);
print(fixedSize.length);

// Use indexer to poplate empty slots in list
fixedSize[0] = ReaderPermission.ALLOW_READ;
fixedSize[1] = ReaderPermission.ALLOW_SHARE;

// Would throw unsupportedError if it were uncommented,
// because list isn`t extendable
// fixedSize.add(ReaderPermission.ALLOW_COMMENT);

// Creates extendable list from another list
List fromOther = new List.from(fixedSize);

// Now you add new items
fromOther.add(ReaderPermission.ALLOW_COMMENT);
