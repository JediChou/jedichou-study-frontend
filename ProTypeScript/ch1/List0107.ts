// File: List0107.ts
// Ref: Apress Pro TypeScript
// Listing 1-7. Typed arrays

// define a interface
interface Girl {
	name: string;
	height: number;
}

// define a array for girl
var girls: Girl[] = [];

// puts some girl objec to girls collection.
girls.push({name:'Sarah', height: 163});
girls.push({name:'Nancy', height: 172});
girls.push({name:'Sammy', height: 160});

// create a sort function
function girlHeightCompare(first: Girl, second: Girl) {
	if (first.height > second.height) return -1;
	if (first.height < second.height) return 1;
	return 0;
}

// execute custome sort
var sort_girls = girls.sort(girlHeightCompare);
console.log(sort_girls);
