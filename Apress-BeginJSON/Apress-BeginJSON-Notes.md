# Beginning JSON

* Author: Ben Smith
* Publisher: Apress
* Link
  * [Book Link1](https://www.apress.com/gp/book/9781484202036)
  * [Book Link2](https://www.amazon.com/Beginning-JSON-BEN-SMITH/dp/1484202031)
  * [Book Link3](https://item.jd.com/1650190391.html)

## Content

* Chapter 1: JavaScript Basics
* Chapter 2: Special Objects
* Chapter 3: String Manipulation
* Chapter 4: Introducing JSON
* Chapter 5: Creating JSON
* Chapter 6: Parsing JSON
* Chapter 7: Persisting JSON: I
* Chapter 8: Data Interchange
* Chapter 9: X-Origin Resources
* Chapter 10: Serving JSON
* Chapter 11: Posting JSON
* Chapter 12: Persisting JSON: II
* Chapter 13: Working with Templates
* Chapter 14: Putting It All Together

## Chapter 1: JavaScript Basics

* Listing 1-1. A valid JavaScript Program
* Listing 1-2. valid number values
* Listing 1-3. Valid String value
* Listing 1-4. Alternating Use of Quotes
* Listing 1-5. Nested Escaped Quotations
* Listing 1-6. Boolean Expressions
* Listing 1-7. An Undefined Variable
* Listing 1-8. null Assignment
* Listing 1-9. Contrasting Expressions
* Listing 1-10. Assigning Values to Variables
* Listing 1-11. Arithmetic Operations
* Listing 1-12. String Concatenation
* Listing 1-13. Comparing Operands
* Listing 1-14. Determining Data Types
* Listing 1-15. Classifying Instances
* Listing 1-16. Inversing a Boolean Value
* Listing 1-17. Statements Require Terminators
* Listing 1-18. Controlling Flow with if
* Listing 1-19. Controlling Flow with if/else
* Listing 1-20. Grouping Statements Within a Block
* Listing 1-21. Substituting Block Statements for Statements
* Listing 1-22. Demonstrates All Falsy Values
* Listing 1-23. The Syntax of a for Loop
* Listing 1-24. An Iterative Statement Can Reference the Current Index
* Listing 1-25. Iterating All Owned Enumerable Keys of an object
* Listing 1-26. Declaring Three Variables
* Listing 1-27. The Syntax of the Function Declaration
* Listing 1-28. Invoking the sayName Function with a Parameter

### Key Points from Chapter 1

* JavaScript is a text-based language made up of Unicode and ASCII characters.
* ECMAScript refers to the specification of the language.
* JavaScript possesses two categories of data types: primitive and non-primitive.
* Primitive values can be numbers, strings, Boolean, undefined, and null.
* undefined represents the lack of value.
* null is used to denote intentional absence of value.
* Expressions resolve to a value.
* Operators are used to fashion expressions.
* The addition operator serves two purposes.
* Strict comparison operators prevent the occurrence of type coercion.
* Non-strict comparison operators rely on type coercion before comparing two operands.
* The typeof operator is used to determine the type of datum.
* The instanceof operator is used to determine the Object type of an instance.
* Statements should be terminated explicitly.
* Statement blocks can group multiple statements.
* Identifiers are case-sensitive text-based labels.
* Functions are named blocks of code that can be provided parameters.

## Chapter 2: Special Objects

* Listing 2-1. Creation of an object.
* Listing 2-2. Dot Notation Is Used to Access a Member from an Instance.
* Listing 2-3. Bracket Notation Is Used to Access a Member from an Instance.
* Listing 2-4. Comparing Notations.
* Listing 2-5. An Ordered List of the Days of the Week.
* Listing 2-6. A for Loop Is Used to Read from an Ordered List.
* Listing 2-7. Demonstrating the String Representation of an array.
* Listing 2-8. Object Literals Can Be Designed with Members.
* Listing 2-9. undefined Assignment of internalObject.
* Listing 2-10. Moved Assignment of Instance Creation.
* Listing 2-11. Reordering of Instantiations.
* Listing 2-12. Object Literals Are Created As They Are Evaluated.
* Listing 2-13. Syntactical Representation of an Object Literal.
* Listing 2-14. Object Literal with a Key/Value Pair.
* Listing 2-15. Object Literal Designed with Multiple Key/Value Pairs.
* Listing 2-16. Syntactical Representation of an array Literal.
* Listing 2-17. array Literal Designed with a Key/Value Pair.
* Listing 2-18. Array Literal Value Obtainable via Bracket Notation.
* Listing 2-19. Array Literal Designed with Multiple Key/Value Pairs.

### Key Points from Chapter 2

* Absolutely everything is an object.
* All classifications in their most generalized form are objects.
* Object and object have two different meanings.
* Object (with an initial capital letter) refers to the JavaScript Object type.
* An object refers to an instance.
* objects are collections.
* Special Objects are collections of like-minded behaviors.
* All instances implicitly possess their ancestors’ behaviors.
* toString returns the string representation of an object.
* new is used to create instances of a non-primitive value.
* Dot notation relies on identifiers.
* Bracket notation relies on strings.
* Objects are unordered collections.
* Arrays are ordered collections.
* Literals can be instantiated with predefined key/value pairs.
* All literals are instantiated via objects behind the scenes.
* this is used to maintain the scope of the property being accessed.

## Chapter 3: String Manipulation

* Listing 3-1. Joining Strings
* Listing 3-2. Formatting Data
* Listing 3-3. Instantiating a String object
* Listing 3-4. Obtaining a String’s Length
* Listing 3-5. Obtaining Unicode Characters
* Listing 3-6. Iterating Through a String’s Characters
* Listing 3-7. Obtaining the First Location for a Substring
* Listing 3-8. The Index of the First Matched Character ‘l’ is Returned
* Listing 3-9. If the Index of -1 is Returned, the Substring is Not Present
* Listing 3-10. The Index of the First Matched Substring is Returned
* Listing 3-11. Locating the Index of the Last Matched Substring
* Listing 3-12. Obtaining Matched Substrings
* Listing 3-13. Replacing Matched Substrings
* Listing 3-14. Extracting Substrings with slice
* Listing 3-15. Extracting Substrings with substr
* Listing 3-16. Separating a Comma-Delimited String
* Listing 3-17. Capitalizing All Alphabetic Characters
* Listing 3-18. Applying Lowercase to All Alphabetic Characters
* Listing 3-19. Comparisons Are Case-Sensitive
* Listing 3-20. Implicit Use of the String object

### Key Points from Chapter 3

* There is a corresponding object for each primitive type.
* A data format refers to the way data is assembled.
* The addition operator is used to capture application logic within a string.
* The string primitive has pseudo members that can be accessed with access notation.
* The behaviors of the string object can be used indirectly.
* The HTTP protocol transmits text.
* The comparison between strings does not ignore case.
* Manipulating a string does not alter the original.

## Chapter 4: Introducing JSON

* Listing 4-1. Examples of Valid Representations of a Collection of Key/Value Pairs, per JSON Grammar
* Listing 4-2. Examples of Valid Representations of an Ordered List, per JSON Grammar
* Listing 4-3. Using the new Keyword to Instantiate an object and array
* Listing 4-4. Creation of an object and an array via Literal Notation
* Listing 4-5. Designing an object and array via Literal Notation with the Provision of Properties
* Listing 4-6. Object Keys Can Be Defined Explicitly or Implicitly As Strings
* Listing 4-7. The Very First JSON Message Used by Douglas Crockford
* Listing 4-8. Examples of Valid String Values As Defined by the JSON Grammar
* Listing 4-9. Valid Numerical Values
* Listing 4-10. Examples of JSON Text Containing a Variety of Valid JSON Values

### Key Points from Chapter 4

* The array r • epresents an ordered list of values, whereas the object represents acollection of key/value pairs.
* Unordered collections of key/value pairs are contained within the following opening ({) and closing (}) brace tokens.
* Ordered lists are encapsulated within opening ([) and closing (]) square bracket tokens.
* The key of a member must be contained in double quotes.
* The key of a member and its possessed value must be separated by the colon (:) token.
* Multiple values within an object or array must be separated by the comma (,) token.
* Boolean values are represented using lowercase true/false literals.
* Number values are represented using double-precision floating number point format.
* Number values can be specified with scientific notation.
* Control characters must be escaped via the reverse solidus (\) token.
* Null values are represented as the literal: null.

## Chapter 5: Creating JSON

* Listing 5-1. Concatenating Primitive Values with Strings
* Listing 5-2. Concatenating Non-Primitive Values with Strings
* Listing 5-3. Converting an object and Its Property into an object literal
