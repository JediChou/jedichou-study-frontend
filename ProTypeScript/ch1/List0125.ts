// File: List0125.ts
// Ref: Apress Pro TypeScript
// Listing 1-25. Optional parameters

function getAvg(a: number, b:number, c?:number): string 
{
	var total = a + b;
	var count = 2;

	if (typeof c != 'undefined') 
	{
		total += c;
		count++;
	}

	var average = total / count;
	return 'The average is ' + average;
}

var result1 = getAvg(4, 6);
var result2 = getAvg(3,3,18);
console.log(result1);
console.log(result2);
