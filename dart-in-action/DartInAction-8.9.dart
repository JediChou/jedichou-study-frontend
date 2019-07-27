// Dart in Action
// Listing 8.9 Using your generic User class in a type-safe manner

// Creates User with Permission
User<Permission> permissionUser = new User<Permission>();

// Creates User with Role, and accesses methods in type-safe
// manner
User<Role> roleUser = new User<Role>();
roleUser.addCredential(const Role("ADMIN"));
print(roleUser.contains(const Role("ADMIN")));

// You can also use it with String ...
User<String> stringUser = new User<String>();
stringUser.addCredential("ACCESS_ALL_AREAS");

// ... and int, or any other class.
User<int> intUser = new User<int>();
intUser.addCredential(999);
