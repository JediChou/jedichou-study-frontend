let user = {
	name: "john",
	age: 30
}
let clone = {}
for (let key in user) {
	clone[key] = user[key];
}
console.log(clone.name);
console.log(clone.age);
