// Dart in Action
// Listing 8.7 Using the Map putIfAbsent() method

// Creates map whose key is a string.
// For each key, you have a list of dates.
var userLogons = new Map<String, List<Date>>();

// When Charlie logs on, creates new list of dates,
// but only if one doesn`t exist already
userLogons.putIfAbsent("charlie", () => new List<Date>());

// Accesses list of dates by key
// "Charlie" and adds today`s date
userLogons["charlie"].add(new Date.now());
