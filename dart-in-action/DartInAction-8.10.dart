// Dart in Action
// Listing 8.10 Ways to compare roles

// Creates three role instances
var adminRole = new Role("TIMESHEET_ADMIN", 3);
var reporterRole = new Role("TIMESHEET_REPORTER", 2);
var userRole = new Role("TIMESHEET_USER", 1);

// You can use the .accessLevel property to
// compare each role using <and>...

if (adminRole.accessLevel > reporterRole.accessLevel) {
	print("Admin role is greater than Reporter role");
}

if (userRole.accessLevel < adminRole.accessLevel) {
	print("User role is less than Admin role");
}

// ... but you get better readability when you can compare
// roles directly.

if (adminRole > reporterRole) {
	print("Admin role is greater than Reporter role");
}

if (userRole < adminRole) {
	print("User role is less than Admin role");
}
