// Ref: Apress Beginning JSON
// Listing 1-25. Iterating All Owned Enumerable Keys of an object
// Jedi Chou, 2016.3.7 14:54
// Jedi Chou, add a comment. 2019.12.27 13:44 PM

var car = new Object();
    car.wheels = 4;
	car.color = "blue";
	car.make = "volvo";

// Jedi memo: very funning!
// The member and member value keep a key-value relationship.
for (var member in car) console.log(member);