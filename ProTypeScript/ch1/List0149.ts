// File: List0149.ts
// Ref: Apress Pro TypeScript
// Listing 1-49. Obtaining runtime types

class Display { name: string = ''; }
class Television extends Display {}
class Hifi {}

class Describer {
	static getName(inputClass) {
		// RegEx to get the class name
		// Jedi: good!!
		var funcNameRegex = /function (.{1,})\(/;
		var results = (funcNameRegex).exec((<any> inputClass).constructor.toString());
		return (results && results.length > 1) ? results[1] : '';
	}
}

var tv = new Television();
var radio = new Hifi();

var tvType = Describer.getName(tv);
var radioType = Describer.getName(radio);

console.log(tvType);
console.log(radioType);
