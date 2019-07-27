function square(arr) {
	var r = [];
	arr.forEach(function(e){
		r[r.length] = e*e;
	});
	return r;
}

var a = [1,2,3,4];
var b = square(a);
console.log(b);
