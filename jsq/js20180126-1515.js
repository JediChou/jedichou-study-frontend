function findAllOccurrences(arr, target) {
	var r = [];
	for (var i=0; i<arr.length; i++)
		if (arr[i] == target)
			r[r.length] = i;
	return r;
}

var s = 'abcdefabc';
console.log(findAllOccurrences(s,'a'));
