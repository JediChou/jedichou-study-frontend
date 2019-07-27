# Chapter 1: Hello Dart
### 1.2.6 Libraries and scope
* Listing 1.5 Libraries and source files
* Jedi: it is a source example; it can not run.

### 1.2.7 Function as first-class objects
* Listing 1.6 Function as first-class objects

### 1.2.8 Concurrency with Isolates
* Remember
    * Dart has optional (or documentary) typing.
    * Libraries help you break up source files and organize code.
    * Privacy is built into the language.
    * Functions are first-class and can exist without classes.
    * Dart understands concurrency using message-passing isolates.

## 1.3 Web programming with Dart

### 1.3.1 dart:html: a cleaner DOM library for the browser
* Listing 1.7 Interacting with the browser
* Jedi: This demo can not run.

### 1.3.2 Dart and HTML5
* Listing 1.8 Drawing on the browser canvas
* Jedi: This demo can not run.
* Remember
    * dart:html provides a Dart view of the browser DOM.
    * HTML5 support is a core part of the Dart language.

## 1.4 The Dart tool ecosystem
### 1.4.1 The Dart Editor
### 1.4.2 Dart virtual machine
### 1.4.3 Dartium
### 1.4.4 dart2js: the Dart-to-Javascript conventer
### 1.4.5 Pub for package management
* Remember
    * The Dart tool ecosystm forms a core part of the Dart project.
    * The Dart Editor provids rich tooling for developers.
    * Dartium makes developing in Dart as simple as a browser refresh.
    * Dart is designed to be converted to JavaScript.

## 1.5 Summary


# Chapter 2: Hello World with Dart tools

## 2.1 The command-line Dart VM
* Lisiting 2.1 HelloWorld.dart

## 2.2 Hello World with the Dart Editor
* HTML and Dart
* HTML and JavaScript

###    2.2.1 Exploring the Dart Editor tools
* Code Navigation and the standard libraries
* Code suggest and autocomplete


### 2.2.2 The relationship between Dart and HTML files
###	2.2.3 Running "Hello World" with Dartium
###	2.2.4 Using dart2js to convert to JavaScript
### 2.2.5 Generating documentation with dartdoc
### 2.2.6 Debugging Dart with breakpoints
* Remember
	* The Dart Editor comes bundled with Dart SDK and the
	  Dartinum browsers.
	* Many code navigation and editing tools are available in the
	  Editor, including code refactoring, the Callers view, and the
	  Outline view.
	* The dart_analyzer tool is used for static analysis of the
	  code. It produces errors and warnnings that appear in the
	  Dart Editor.
	* You can create an HTML-formatted API document from your code
	  comments using the dartdoc tool.
	* The Dart Editor and Dartium communicate with each other to
	  provide an integrated, round-trip debugging solution.

## 2.3 Importing libraries to update the browser UI
* Listing 2.4 HelloWorld with status <div>
* Jedi: The name duplicated. And this is a code template.
* Jedi: DartInAction-2.4.html (Pls check it)

###	2.3.1 Importing Dart libraries
```dart
import "dart:html";
import "package:unittest/unittest.dart";
```
```shell
pub install
pub update
```
```dart
import "./myLibraries/helloLibrary.dart";
```

### 2.3.2 Accessing DOM elements with dart:html

### 2.3.2 Dynamically adding new elements to the page
* Listing 2.5 HelloWorld.dart: creating elements dynamically
* Remember
	* Dart uses the dart:html library to provide access to browser
	  DOM APIs and elements.
	* Your app can create elements dynamically and add them to the
	  browser DOM.
	* You can use the pub package-management tool to import external
	  libraries.
	* You can import library directly on the filesystem.

## 2.4 Summary

# Chapter 3: Building and testing your own Dart app
* This chapter covers
	* Building a user interface in the browser
	* Reacting to user events
	* Reusing code with functions
	* Getting familiar with Dart classes
	* Writing simple unit tests

## 3.1 Building a UI with dart:html
###	3.1.1 Entry-Point HTML
### 3.1.2 Creating dart:html elements
```dart
var t = new Element.tag('div');
var t = new Element.html('<h2 id="title"><em>Pack</em></h2>');
```	
### 3.1.3 Creating a new Element from HTML snippets
```dart
var paragraphContent = "Some about box text";
Element infoBoxDiv = new Element.html("""
<div id='infoBox'>
	<h3>About PackList</h3>
	<p>$paragraphContent</p>
</div>""");
```

### 3.1.4 Creating elements by tag name
```dart
itemInput.id = "txt-item";
itemInput.placeholder = "Enter an item";
// This will be generate html like:
// <input id="text-item" placeholder="Enter an item"></input>
```
```
// create a new text box:
var itemInput = new Element.tag("input");
Element itemInput = new Element.tag("input");
InputElement itemInput = new Element.tag("input");
```

###	3.1.5 Adding elements to an HTML document
* Listing 3.1 Adding a new Element to the document body
* Listing 3.2 Building the PackList UI
* Remember
	* You can create Element types using either Element.html(...)
	  or Element.tag(...tag name...)
	* The dart:html library defines all the elements that a modern
	  browser understands.
	* The Dart Editor can help provide you with autocomplete
	  information for the properties ( and the API documentation
	  at api.dartlang.org can help provide more detail).
	* Elements become HTML tags in the browser. Properties are
	  attributes on those tags.
	* All elements (including the body) have a children property
	  that contains the list of its child elements.

## 3.2 Building interactivity with browser events
```dart
myEventListennerFunction(Event event) { window.alert("Look - an event has been triggered");}
```

### 3.2.1 Adding the PackList item from a button click
```dart
// snip ui element creation code
addButton.on.click.add((event) {
	var packItem = itemInput.value;
	var listElement = new Element.html("<div class='item'>${packItem}</div>");
});
```

###	3.2.2 Event handling with Dart's flexible function syntax
```dart
// The longhand form looks like this:
void myEventListener(Event event) {
	// do something
	window.alert("an event");
}
```
```dart
// The shorthand (or single-line) form looks like this:
void myEventListener(Event event) => window.alert("an event");
```
```dart
// The two functions here are equivalent:
int addValues(int a, int b) { return a + b; }
int addValues(int a, int b) => a + b;
```
```dart
// so
addButton.on.click.add((event){ // function body });
addButton.on.click.add((event) => single statement);
```dart
// also..
var myEventListener = (event) { // function body };
addButton.on.click.add(myEventListener);
```
```dart
// also..
var myEventListener = (event) => single statement;
addButton.on.click.add(myEventListener);
```
* Remember
	* Functions have a multiline syntax and a shorthand syntax.
	* Function return type information and parameter type information are optional.
	* Anonymous functions can be passed as paramters and stored in variables.

###	3.2.3 Responding to dart:html browser events
```dart
// events your button
addButton.on.click
addButton.on.drag
addButton.on.mouseMove
```
```dart
// event binding
```

###	3.2.4 Refactoring the event listener for reuse
```dart
// Adding an event listener to the text box to detect
// the Enter key is relatively straightforward:
itemInput.on.keypress.add( (event) {
	if(event.keyCode == 13) {
		var packItem = itemInput.value;
		var listElement = new Element.html("<div class='item'>${packItem}</div>";
		itemContainer.children.add(listElement);
		itemInput.value = "";
	}
});
```
```dart
// Improve readability
addItem() {
	var packItem = itemInput.value;
	var listElement = new Element.html("<div class='item'>${packItem}</div>");
	itemContainer.children.add(listElement);
	itemInput.value = "";
}
addButton.on.click.add((event) => addItem());
itemInput.on.keypress.add( (event) {
	if (event.keyCode == 13) {
		addItem();
	}
});
```

### 3.2.5 Querying HTML elements in dart:html
```dart	
// Queries for all input tags that are children of body tag
var itemInput = query("input");
```
```dart
// Select first (and only) one into itemInput variable
InputElement itemInput = itemInputList[0];
```
```dart
// Queries for element with ID #items
var itemContainer = query("#items");
```
* Listing 3.3 PackList that reacts to user events
* Remember
	* An event listener in dart:html is a function that takes a single event parameter.
	* You can add multiple event listener to listen to a single event being raised.
	* dart:html allows you to query for a single element with CSS selectors using
	  the query() function.
	* Query for multiple child elements with the queryAll() function.

## 3.3 Wrapping structure and functionality with classes

### 3.3.1 Dart classes are familiar
### 3.3.2 Constructing the PackItem class
* Listing 3.4 Basic class structure
* Listing 3.5 Refactoring the addItem method to use your class
### 3.3.3 Warp functionality with property getters and setters
```dart
class PackItem {
	var _uiElement;
	DivElement get uiElement => _uiElement;
	set uiElement(DivElement value) => _uiElement = value;
}
```
* Read-only property with getters
* Listing 3.6 Adding a uiElement getter
* Updating the UI state through a setter
* Listing 3.7 Adding the isPacked property, getter, and setter
```dart	
// The code in bold is the click listener itself,
// defined in function shorthand, which change the
// isPacked value from true to false, and vice versa:
DivElement get uiElement {
	if( _uiElement == null ) {
		_uiElement = new Element.tag("div");
		_uiElement.classes.add("item");
		_uiElement.text = this.itemText;
		_uiElement.on.click.add( (event) => isPacked = !isPacked);
	}
	return uiElement;
}
```
* Remember
	* Dart classes are similar to C# and Java classes.
	* Constructor parameters can automatically initialize property values.
	* Getters and setters are interchangeable with properties.
	* It is good practice to use type information on getter, setter, and
	  properties and other methods that you expect people to use.

## 3.4 Unit-testing the code
* Listing 3.8 PackListTest.html: entry-point HTML file for your unit test
    Client vs. server restrictions
	Although Dart can run in the browser (client side) and on the server,
	a number of specific libraries can run only on the client side, and
	some are valid only on the server. The dart:html library interacts with
	the browser DOM and is available for use only when Dart is running in
	the web browser. The dart:html library won not run on the server-side
	Dart executable, because no browser DOM is available.
	
	Testing any code that import dart:html won not work as server-side test,
	because the server-side virtual machine does not contain the browser
	DOM for HTML interaction.

* Listing 3.9 PackListTest.dart: client-side test suite boilerplate code
	
### 3.4.1 Creating unit tests
```dart
test("test name", (){
	// test code goes here
});
```
	
###	3.4.2 Defining test expectations
* Listing 2.10 Testing for expectations in unit tests
	Automating test runs:
	Browser-based unit tests can be automated with the aid of an
	external client-side test framework, such as Selenium, which
	you can launch from a continuous build server. Selenium can
	navigate the unit-test page in your app, where the unit tests
	run in the browser. You can configure Selenium to pass or fail
	based on the browser content rendered. Dart also provides
	Selenium web-driver bindings, allowing Selenium scripts to be
	written Dart directly. See the Dart webdriver API at
	api.dartlang.org for more details.
* isNull, isNotNull, isTrue, isFalse, same, equals, isEmpty<br>
  contains, throws, throwsNullPointerException, anything

### 3.4.3 Creating a custom matcher
* Listing 3.11 Creating a custom PackList matcher
* Remember
	* You can run unit tests in the browser or on the server.
	* Browser-based unit tests can import libraries that use dart:html.
	* Server-side unit tests can not import libraries that use dart:html.
	* Unit tests use the expect() function in conjunction with a matcher
	  to validate your tests expectations.
	* You can build custom matchers by extending the BaseMatchers class.

## 3.5 Summary

# Chapter 4: Functional first-class, functions and closures
* This chapter covers
	* Declaring functions and return types
	* Specifying mandatory and optional parameters
	* Storing first-class functions in variables
	* Using functions as closures
	
## 4.1 Exammining Dart functions
* Each function takes inputs and outputs, and the function
  I perform are highlighted in bold:
    * Measure the quanitity of cement (the cement volume).
	* Measure the quanitity of sand as twice the cement volume.
	* Measure the quanitity of gravel as three times the cement volume.
	* Mix the cement and sand to create a mortar mix.
	* Mix the mortar with gravel to create by a dry concrete mix.
	* Mix the concrete mix with water to create wet concrete.
	* Lay the concrete before it sets.
* Listing 4.1 Mixing concrete in Dart
* Figure 4.1 Longhand and shorthand versions of the mix functions in Dart (Jedi: Funning)

### 4.1.1 Function return types and the return keyword
* The shorthand syntax, which uses the form: function_name() => expression;
* Return type can be specified for function.
  Ingredient mix(item1, item2) { ... snip ... }
* No return type specified = specifying
  mix(item1, item2) { ... snip ... }
* dynamic return type.
  dynamic mix(item1, item2) { ... snip ... }
* Using the void type to indicate no return value
  startMixer(speed) { Mixer.start(speed); }

### 4.1.2 Providing input with function parameters
* Arguments are passed by reference
  Todo, page 78/105, List 4.2 Checking parameters passed by reference
* Optional positional parameters
```dart
mesuareQty(new Sand(), null, null);
mesuareQty(new Sand(), 1, null);
mesuareQty(new Sand(), null, 1);
mesuareQty(new Sand(), 1, 1);
```
* You can define it like these:
```dart
mesuareQty(ingredient, [int numberOfCementBags, int proportion]) {}
mesuareQty(ingredient, [int numberOfCementBags=1, int proportion=1]) {}
```
* Optional named parameters
```dart
mesuareQty(ingredient, {int numberOfCementBags:1, int proportion:1}) {
	return ingredient * (numberOfCementBags - proportion);
}
measureQty(new Sand(), numberOfCementBags: 2, proportion: 1); 
measureQty(new Sand(), numberOfCementBags: 2); 
measureQty(new Sand(), proportion: 1); 
measureQty(new Sand());
```
* Remember
	* Shorthand functions automatically return the value created by the
	  single-line expression that forms the function body.
	* Longhand functions should use the return keyword to return a value;
	  otherwise, null is automatically returned.
	* You can tell the type checker that you are not intending to return
	  a value by using the return type void.
	* Type information on parameters is optional.
	* You can delcare option parameters as a comma-separated list within
	  square brackets after the mandatory parameters are declared.
	* Calling code can refer to optional parameters by name, using a
	  name:value syntax.

## 4.2 Using first-class functions
```dart
var mortar = mix(sand, cement);
var mixFunction = mix;
var dryConcrete = mixFunction(mortar, gravel);
print(mix is Object);
print(mix is Function);
```
```dart
// Dart script of library file
mix1(item1, item2) { return item1 + item2; }
main() {
	mix2(item1, item2) { return item1 + item2; }
	var mix3 = (item1, item2) { return item1 + item2; };
	var mix4 = mixer(item1, item2) { return item1 + item2; };
	
	mix1(new Sand(), new Gravel());
	mix2(new Sand(), new Gravel());
	mix3(new Sand(), new Gravel());
	mix4(new Sand(), new Gravel());
	// mixer(new Sand(), new Gravel());

	print(mix1);
	print(mix2);
	print(mix3);
	print(mix4);
}
```
* Jedi: Pls check DartInAction-UsingFirstClassFunction.dart

### 4.2.1 Local function declarations
* Listing 4.3 Function that takes a function object as parameter
  Jedi: it is a cool future ! But it like javascript ...
* Simple local function declartaion
  Listing 4.4 Outer main() function uses the inner mix() function
* Anonymous function declaration
```dart
var mix3 = (item1, item2) {
	return item1 + item2;
};
```
* Named function assignment declaration
  List 4.6 Recursive, typed, named function

### 4.2.2 Defining strong function types
* Listing 4.7 Function type strongly types a function variable or parameter
* Listing 4.8 Using typedef to declare a function signature
* Remember
	* When you use a function by name, without the parameter brackets,
	  you get a reference to its function object.
	* Simple local functions declared in a similar manner to top-level,
	  library-scoped functions are able to refer to themselves by name
	  and can make full use of parameter and return type information
	  to the tools.
	* Anonymous functions have no name and can not use recursion or
	  specify strong return type information, but they do provide
	  useful shorthand for adding functions into lists or passing to
	  other functions as parameters.
	* You can use a named function in place of an anonymous function
	  to allow recursion and strong return type information, but its
	  name is available only in the scope of itself.
	* You can use the typedef keyword to decleare a specific function
	  signature so the type checker can validate function objects.

## 4.3 Closures
* Listing 4.9 Creating a closure with a function as a return type
* Remember
	* A function that uses variables that were not declared in its
	  own scope has the potential to become a closure.
	* A function becomes a closure when that function is passed out
	  of the scope from which it was declared, by either passing it
	  into another function or returning from the function that
	  declared it.

# Chapter 5 Understanding libraries and privacy
* This chapter covers
	* Organizing your code into reuseable packages
	* Importing libraries into your application
	* Hiding functionality with library privacy
	* Using multiple source files
	* Using script as runnable libraies

## 5.1 Defining and importing libraries in your code
* Figure 5.1 loglib functions and classes made available for external code
* It has the following functionality, which provides userful items to log:
	* Build UI (debug level)
	* User adds an item (info level)
	* User adds an item with no title (warn level)
	* User marks item as packed or no longer packed (info level)

### 5.1.1 Defining a library with the library keyword
* Figure 5.2 library is the first statement in a library.
* Figure 5.3 Valid and invalid library names
* Listing 5.1 loglib.dart functions and classes

### 5.1.2 Importing libraries with import
* Listing 5.2 packlist.dart importing loglib.dart library
* Libraries importing other libraries
* Figure 5.6 The import statement must appear before code statements.
* Using the top-level imported functions
* Listing 5.3 Generated JavaScript extract of the PackList app and loglib library
* The remaining ones are as follows:
	* User adds an item (info level)
	* User adds an item with no title (warn level)
	* User marks item as packed or no-longer packed (info level)
* Figure 5.7 PackList calls the top-level function in the loglib library
* Listing 5.4 Adding logging method calls to the PackList application
* Using top-level imported calsses
* Listing 5.5 packlist.dart using the Logger class imported from loglib
* Figure 5.8 The logging messages output by the PackList app
* Using library prefixes to prevent name clashes
* Figure 5.9 Multiple imported libraries can sometimes contain the same
  function names, so you need a mechanism to deal with these clashes
* Figure 5.10  You can delcare a library prefix for use when referring
  to the code in an imported library.
* Remember
	* The library library_name; statement must be the first statement in
	  a library.
	* Libraries can use the import "uri//to//lib.dart"; statement to
	  import other libraries.
	* library and import statements must appear before other code.
	* You can use library prefixes to avoid naming clashes between
	  different libraries.

## 5.2 Hiding functionality with library privacy
* Figure 5.11 Privacy is achieved by prefixing the class, function, property,
  or method name with an underscore, which allows access only from other code
  in the same library.
* The two rules to remember are as follows:
	* Code in a library can access any other code in the same library.
	* Code outside a library can access only nonprivate code in that library.

### 5.2.1 Using privacy in classes
* Figure 5.12 WebServerLogger can access private properties of the Logger
  class because they are in the same library.
	* Creating a Logger and a WebServiceLogger
	* Passing the Logger instance to the WebServiceLogger
	* _isEnabled is private within Logger.
	* But WebServerLogger is in the same library, so it can still access
	  _isEnabled from the Logger class.
* Accessing private fields with getters and setters
	* Figure 5.13 Using getters and setters to provide varying levels of 
	  a class
* Using private methods
* A puzzler with private classes
	* Figure 5.14 To keep your code readable and maintainable, you can
	  extract a block of code into private method of the same class that
	  is not visible from outside the library.
	* Listing 5.6 mixed_loglib.dart: library containing with both public
	  and private classes

### 5.2.2 Using private function in libraries
* Listing 5.7 loglib.dart with a private function
* Remember
	* The private _ prefix can be applied to functions, classes,
	  methods, and properties.
	* Code marked as privae can be accessed only from within the
	  same library.
	* Code not marked as private can be accessed by external users
	  of that library.

## 5.3 Organizing library source code
* Figure 5.15 loglib.dart contains a growing number of classes
  and functions.
	* loglib directory :
	  {
		loglib.dart :
	    [
			class Logger: snip...,
			class _ServerLogger: snip...,
			method info(msg): snip...,
			method warn(msg): snip...,
			method debug(msg): snip...,
			_logMsg(msg): snip...
		]
	  }
* Figure 5.16 The intended goal is to split the library into files.
	* loglib directory : {
		loglib.dart : source code...,
		classes.dart : [class Logger: snip..., class _ServerLogger: snip...],
		function.dart : [
			info(msg): snip...,
			warn(msg): snip...,
			debug(msg): snip...,
			_logMsg(msg): snip...
		]
	}
* Tip: In libraries, there are likely to be multiple units of functionality,
  each of which may consist of a new classes. As a best practice, it is these
  units of cuntionality that you should wrap into a single source file.
* Jedi: Every detail contains a design

### 5.3.1 Using the part and part of keywords
* Listing 5.8 Complete functions.dart source file
* Figure 5.17 Splitting a single library file into separate source files
* Figure 5.18 part statements must come before any other source code.
* Source-file restrictions <br>
  You should be aware of the following restrictions when using the part keyword:
	* Files imported into a library with the part command need to be treated as
	  though they are part of the original library file. That is, they can not
	  contain any statements of their own. If they did, they had potentially break
	  the strict ordering of the library, import and part keywords.
	* Souce files can belong to only a single library in an application. loglib
	  and webloglib could not both use part `classes.dart`;.
	* A class or function must exist in a single file. There is no way to make a
	  class or a function span multiple files (there are no partial classes as
	  in C#).
  If you think of part files as being part of the same logical library file, then
  these restrictions make sense. You could not have on part of a file also be part
  of a different file, and you could not have a library file contain another
  library statement halfway down. It would also be impossible to split a class or
  function into two separate parts in the same file.
* Remember
	* A single library file can be split into many part files
	* External users of the library have no knowledge that the library hass been
	  split.
	* Dart treats a library file split into multiple physical part files as
	  though it were a single library file.

## 5.4 Packaging your libraries
* Listing 5.9 Example pubspec.yaml for loglib
* Figure 5.19 A package structure is defined by convention.
  loglib directory = [
    pubspec.yamal,
    pubspec.lock, 
    README.md,
    lib directory = [
       loglib.dart,
       src directory = [
         functions.dart,
         classes.dart
       ]
    ],
    test directory = [ loglib_test.dart],
    doc directory = [About Loglib.txt],
    bin directory = [loglib_viewer.dart]
    example directory = [packlist.html, packlist.html]
  ]

## 5.5 Scripts are runnable libraries
* Listing 5.10 Library containing a main() method
* Figure 5.20 You can take an existing app and turn it into
  a library by adding a library statement.

## 5.6 Summary
* Libraries can import other libraries.
* Remember
	* A library can also be used as a runnable script.
	* A library`s source code can be split across multiple part files.
	* Any code declared as private in a library is accessible from within
	  any other part of that library.
	* Any code not declared as private can also be used by code that uses
	  the library.

# Chapter 7 Constructing class and interfaces
* This chapter cover
	* Defining classes
	* Dart`s implied interfaces
	* Constructing classes

## 6.1 Defining a simple class
* Listing 6.1 A simple User class

### 6.1.1 Coding against a class`s interface
* Listing 6.2 logon.dart: using an example AuthService
* Figure 6.1 The implied interface is defined by the public
  members of the class.
* Listing 6.3 Using a mock authentication service

### 6.1.2 Formalizing interfaces with explicit interface definitions
* Listing 6.4 Defining an explicit interface
* Jedi: New idea - How to user json to mapping UML

### 6.1.3 Using multiple interfaces
* Listing 6.5 Implementing muliple interfaces
* Listong 6.6 Using EnterpriseAuthService with multiple interfaces

### 6.1.4 Declaring property getters and setters
* Listing 6.7 logon_library.dart: getters, setter, and properties in interfaces
* Remember
	* A class definition is also implicitly an interface definition
	* The abstract keyword is used to declare a class without
	  implemented methods and can be used for explicit interface
	  definitions.
	* The implements keyword indicates that a clas is providing the
	  implementations of specific methods.
	* Classes have an `is-an` relationship with interfaces.

## 6.2 Constructing classes and interfaces

### 6.2.1 Constructing class instances
### 6.2.2 Designing and using classes with multiple constructors
```dart
class EnterpriseAuthService {
	EnterpriseAuthService() { // default constructor }
	EnterpriseAuthService.withConn() { // with connectiing string }
	EnterpriseAuthService.usingServer() { // with server }
}
```

### 6.2.3 Using factory constructors to create instances of abstract classes
* Listing 6.8 Using factory constructors for default implementations

### 6.2.4 Reusing objects with factory constructors
* Listing 6.9 Using a factory constructor to return an existing object from cache
* Tip, When users of your library use the new keyword, they are expecting a new
  object. As a best practice, use caching factory constructors only if you need to
  provide preprocessing on new objects or when you can guarantee that reusing an
  existing object won`t surprise a user of your class.

### 6.2.5 Using static methods and properties with factory constructors
* Figure 6.3 Static methods and properties are shared by all instances of a class
	* Static data is stored in the class itself, not instances of the class.
	* Using the factory constructor adds instances to the static cache property.
	* You can also refer to static methods outside of the factory constructor by
	  using the class name.
	* authSvc3 isn`t in the cache because it`s the same instance as authSvc1: it
	  has the same key values, so the factory constructor returned the same
	  instance.
* Listing 6.10 Implementing a cache with static members
* Remember
	* Abstract classes can use factory constructors to instantiate a default
	  implementation class, which allows users to maintain good application
	  design by working exclusively with higher-level interfaces.
	* Classes can have multiple named constructors, which are prefix with the
	  class name.
	* The factory keyword lets you create classes that can appear to return
	  a new object but instead get the object instance from elsewhere.

## 6.3 Creating constant classes with final, unchanging variables

### 6.3.1 Final values and properties
### 6.3.2 The constructor initialization block
* The constructor initializer section appears after the list of constructor
  parameters and can be used to initialize final properties.

### 6.3.3 Using the const keyword to create a const constructor
* Listing 6.11 Creating a const constructor
* Remember
	* The final keyword declares that variables and properties can`t change
	  once initialized.
	* A constructor initialization block is required to initialize final
	  properties.
	* The const keyword allows you to define a constant constructor and
	  create an instance of class that can`t change.

## 6.4 Summary

# Chapter 7 Extending classes and interfaces
* This chapter covers
	* Building class and interface inheritance hierarchies
	* Introducing the Object base class
	* Understanding the dynamic type annotation
* Figure 7.1 The AuthService definition from the logon_lib example

## 7.1 Extending classes with inheritance
* Listing 7.1 A new User class

### 7.1.1 Class inheritance
* Figure 7.2 EnterpriseUser shares an `is-an` relationship with all the
  classes going up the hierarchy.
* Liting 7.2 EnterpriseUser with additional functionality

### 7.1.2 Inheriting constructors
* Figure 7.3 A child inherits all the existing functionality from the
  superclass except constructors.

### 7.1.3 Overriding methods and properties
* Listing 7.3 EnterpriseUser overriding functionality from parent User class
* Listing 7.4 logon.dart: overriding properties inherited from the parent class

### 7.1.4 Including abstract classes in a class hierarchy
* Figure 7.4 The current inheritance hierarchy between your interfaces and classes
* Listing 7.5 Making User an abstract class
* Figure 7.5 Methods declared in interfaces can be implemented by child classes
  if the parent class is declared as abstract.
* Remember
	* The extends keyword denotes that a class is inheriting (subclassing) another
	  class.
	* The abstract keyword indicates that a class isn`t providing its own
	  implementation of a method. Classes that inherit an abstract class should
	  provide that functionality.
	* Subclasses don`t inherit a superclass`s constructor. You can call constrctors
	  in the parent class by using the super prefix to refer to them in the
	  constructor initializer block.
	* You can also call specific methods and properties of the parent class by using
	  the super prefix anywhere in normal code.

## 7.2 Everything is an object

### 7.2.1 Testing the `is-an` relationship with Object
* Figure 7.6 Classes automatically extend the Object base class.
* Note: The `is-an` relationship works only one way (up the hierarchy,
  from the child to the parent), so calling print(Object is User);
  returns false because an Object isn`t a User.
* Figure 7.7 All classes have an `is-an` relationship with the 
  Object class.
* You can observe two points when you have a single base class:
	* Every class has an `is-an` relationship with Object, meaning
	  you can refer to everything as an object in variable and
	  parameter declarations.
	* Every class inherits some basic functionality provided by
	  the base Object class.

### 7.2.2 Using the `is-an` Object relationship
### 7.2.3 Using toString() funcionality inherited from the base Object class
* Listing 7.6 Calling toString() outputs a textual representation of the object
* Listing 7.7 Overriding the toString() functionality from Object

### 7.2.4 Intercepting nonSuchMethod() calls
* Figure 7.8 Dart checks up the hierachy for the method,
  which doen`t exist. Then it checks up the hierarchy for
  a noSuchMethod() implementation until it finds the one
  declared in the base Object class.
* Listing 7.8 Implementing nonSuchMethod()

### 7.2.5 Other default functionality of the Object class
* Figure 7.10 The equals operator from the Object class allows
  comparison of two instances of an object.
* Remember
	* Everything `is-an` object.
	* Object defines the toString() and noSuchMethod(name, args)
	  methods, which you can override in your own classes.
	* noSuchMethod() can capture unknown method calles and
	  property access.

## 7.3 Introducing the dynamic type
* Figure 7.11 Illustration of where Dart implies the dynamic type,
  compared with the equivalent strong typing

### 7.3.1 Using the dynamic type annotation

## 7.4 Summary
* Remember
	* Use the extends keyword to declare that a class inherits a
	  parent class.
	* The super keyword lets you call members (methods and properties)
	  on a parent class.
	* You can override specific members by providing your own
	  implementations.
	* Object provides the toString() method, which you can use to
	  provide extra information when outputting log messages.
	* noSuchMethod() from the base Object class can be used to
	  intercept missing methods and properties.
	* The dynamic type annotation represents the untyped version of
	  variables and parameters in Dart.

# Chapter 8 Collections of richer classes
* This chapter covers
	* Working with collections
	* Building type-safe, general-purpose classes with generics
	* Overloading class operators

## 8.1 Working with collections of data
* Listing 8.1 Permission boilerplate code

### 8.1.1 Collections of objects
* Figure 8.3 You`ll add a collection of permissions to the User
  class. When Alice logs on, she`ll have permissions added to
  that collection.
	* Defining the User class
	* Using the User class in the AuthService
	(user.permission as List).add(ReaderPermission.ALLOW_READ);
* Methods on the collection interface
	* Listing 8.2 Returning a list of AdminPermissions
* Iterating a collection
* Manually iterating through a collection
	* Liting 8.3 Extracting the first two items from a collection using an iterator

### 8.1.2 Using the concrete implementations of the Collection interface
* Figure 8.5 Collection is the core interface in Dart of dealing with
  collections of objects, but you need to use a concrete of List, Queue,
  or Set.
* Creating Lists
* Listing 8.4 Different ways to create a list
* Creating Sets
* Creating Queues

### 8.1.3 Making collections specific with generics
* Repalcing the palaceholder types
  List<Permission> permissions = new List<Permission>();
* Table 8.1 A comparision of actual method signatures and how
  the dart type checker interprets them
* So what `is-a` list?
```dart
var p = AdminPermission.ALLOW_EDIT;
print(p is Permission );		// True
print(p is AdminPermission);	// True
print(p is ReaderPermission);	// False
```
```dart
var adminList = new List<AdminPermission>();
print(adminList is List)					// True
print(adminList is List<Permission>);		// True
print(adminList is List<AdminPermission>);	// True
print(adminList is List<ReaderPermission>);	// False
```

### 8.1.4 Storing lists of key/value pairs with generic maps
* Listing 8.5 Creating and using a map of String and User
* Creating predefined map literals
* Figure 8.7 A map can be defined in Dart as a list of key/value pairs.
* Listing 8.6 Using the dart:json library to convert between maps and strings
* Accessing the key and value collections
* Inserting new items into the map
* Figure 8.8 You want to create a new value only if the key doesn`t already exist.
* Listing 8.7 Using the Map putIfAbsent() method
* Remember
	* Collections can be created using the concrete instances of
	  List, Queue, and Set.
	* Dart has no Array type, but you can use List in its place. A list can be
	  fixed or dynamically expandable.
	* All the collection types are generic, and you can specify the type of
	  a collection by using the <T> syntax with the type constructor, such as
	  new List<String>() to create a list of Strings.
	* Lists can be accessed using zero-based indexers such as myList[2];,
	  which accesses the third item in the list.
	* Maps contain a list of key/value pairs and also use the indexer syntax,
	  but they take the key as the indexer. For example, putting a Date into
	  a Map<String, Date> could look like this:
	  myMap[``aliceKey``] = new Date.now();

## 8.2 Building your own generic classes
* Figure 8.9 If you find yourself creating several similar classes that use
  slightly different objects but in the same way, then you could have a case
  for using generics.
* Table 8.2 Some type placeholder letters are used by convention.
* Listing 8.8 User class that uses generic credentials

### 8.2.2 Using your custom generic class
* Listing 8.9 Using your generic User class in a type-safe manner

### 8.2.3 Restricting the types that can be used as placeholders
* Remember
	* If you find yourself making a number of nearly identical classes,
	  then you might want to think about using generics.
	* The generic type placeholder is used throughout the class to
	  represent the generic type that will be specified by the class`s
	  user.
	* You can restrict generic type placeholders by using the extends
	  keyword.

## 8.3 Operartor overloading

### 8.3.1 Overloading comparison operators
* Listing 8.10 Ways to compare roles

