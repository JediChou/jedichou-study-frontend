// Dart in Action
// Listing 8.5 Creating and using a map of String and User

// Creates new map of String keys and User values
Map<String, User> userMap = new Map<String, User>();

// Inserts items into map by using key indexer
userMap["aliceKey"] = new User("Alice");
userMap["bobkey"] = new User("Bob");

// Reads items back out of map by using key indexer
User aliceUser = userMap["aliceKey"];
User bobUser = userMap["bobKey"];

// Charlie doesn`t exist in map, so charlieUser contains null.
User charlieUser = userMap["charlieKey"]

