// jsab-002.js
// Question: Get sum of array[int]

function sum(arr) {
	var s = arr[0];
	for (var i=1; i<arr.length; i++)
		s += arr[i];
	return s;
}

console.log(sum([1,2,3,4]));
