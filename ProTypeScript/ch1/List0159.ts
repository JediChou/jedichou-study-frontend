// File: List0159.ts
// Ref: Apress Pro TypeScript
// Listing 1-59. Generic functions

function reverse<T>(list: T[]) : T[] {
	var result: T[] = [];
	for (var i = (list.length - 1); i >=0; i--)
		result.push(list[i]);
	return result;
}

var letters = ['a','b','c','d'];
var nums = [1,2,3,4];
console.log(reverse(letters));
console.log(reverse(nums));
