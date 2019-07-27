// Dart in Action
// Dart script of library file

// mix1() function is declared in top-level
// function scope: that is, not within
// another function or class
mix1(item1, item2) { return item1 + item2; }

// main() function begins
// a new function scope in which variables
// and functions can be decleared
main() {

	// mix2() is a function definition
	// within another function scope. The
	// syntax is the same as mix1().
	// Notice: Note the absence of a ;
	// following the declaration.
	mix2(item1, item2) { return item1 + item2; }

	// This function is declared anonymously
	// and assigned to a variable called mix3.
	// Notice: Note the ; used to terminate the
	// variable assignment.
	var mix3 = (item1, item2) { return item1 + item2; };

	// This function, called mixer(), is
	// declared and assigned to a
	// variable called mix4. The mixer()
	// function does not exist outside of the
	// scope of the function assignment.
	// Notice: Also note the ; used to terminate
	// the variable assignment.
	// Error:
	//   Under:
	//     Dart VM version: 1.10.0 
	//     (Fri Apr 24 06:02:24 2015)
	//	   on "windows_x64"
	//   Error Message: semicolon expected
	var mix4 = mixer(item1, item2) { return item1 + item2; };
	
	mix1(1, 2);
	mix2(1, 2);
	mix3(1, 2);
	mix4(1, 2);

	// Because mixer() does not exist outside its own scope,
	// calling it here would be an error. mixer() is assigned
	// to the variable mix4.
	// mixer(new Sand(), new Gravel());

	// You now have references to all four functions
	// and can use them in your application.
	print(mix1);
	print(mix2);
	print(mix3);
	// print(mix4);
}
