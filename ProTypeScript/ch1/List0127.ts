// File: List0127.ts
// Ref: Apress Pro TypeScript
// Listing 1-27. Rest Parameters

function getAvg(...a: number[]): string {
	var total = 0;
	var count = 0;
	for (var i=0; i<a.length; i++) {
		total += a[i];
		count++;
	}
	var avg = total/count;
	return 'The average is ' + avg;
}

console.log(getAvg(2,4,6,7,10));
