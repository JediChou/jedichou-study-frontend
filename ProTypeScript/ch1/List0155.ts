// File: List0155.ts
// Ref: Apress Pro TypeScript
// Listing 1-55. JavaScript output for module loading

// CommonJS style
var dependency = require("./CommonJSDependency");
// your code

// AMD style
define(
	["require", "exports", "AmdDependency"],
	function(require, exports, __dependency__) {
		var dependency = __dependency__;
		// your code;
	}
);
