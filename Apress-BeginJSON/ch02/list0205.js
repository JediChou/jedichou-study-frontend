// Ref: Apress Beginning JSON
// Listing 2-5. An ordered list of the days of the week
// Jedi Chou, 2016.3.7 15:45

var orderedCollection = new Array();
orderedCollection[0] = 'sunday';
orderedCollection[1] = 'monday';
orderedCollection[2] = 'tuesday';
orderedCollection[3] = 'wenesday';
orderedCollection[4] = 'thursday';
orderedCollection[5] = 'friday';
orderedCollection[6] = 'saturday';

for(var i in orderedCollection)
	console.log(orderedCollection[i]);
