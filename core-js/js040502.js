function add(x, y) { return x+y;}
var obj = {
	id: "obj1"
}
obj.func = add;
console.log(obj.id);
console.log(obj.func(2,3));
