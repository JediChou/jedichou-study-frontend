// Ref: Apress Beginning JSON
// Listing 2-6. A for loop is used to read from an ordered list
// Jedi Chou, 2016.3.7 15:50

var orderedCollection = new Array();
orderedCollection[0] = 'sunday';
orderedCollection[1] = 'monday';
orderedCollection[2] = 'tuesday';
orderedCollection[3] = 'wenesday';
orderedCollection[4] = 'thursday';
orderedCollection[5] = 'friday';
orderedCollection[6] = 'saturday';

var daysOfTheWeek = 7;
for(var i=0; i<daysOfTheWeek; i++) console.log(orderedCollection[i]);
