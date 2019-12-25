var arr1 = [1,2,3,4,5];
var arr2 = ['','b','c','d','e'];

var a = {}, b = {};

for (var i=0, j=0; i<arr1.length, j<arr2.length; i++, j++) {
	if (arr1[i] != "" && arr2[i] != "")
		console.log("arr1[i]=", arr1[i], " arr2[j]=", arr2[j]);
}
