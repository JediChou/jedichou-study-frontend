// Ref: Apress Beginning JSON
// Listing 1-25. Iterating All Owned Enumerable Keys of an object
// Jedi Chou, 2016.3.7 14:54

var car = new Object();
    car.wheels = 4;
	car.color = "blue";
	car.make = "volvo";
// Jedi memo: very funning!
for (var member in car) console.log(member);
