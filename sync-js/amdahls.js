function amdahl(p, n) {
	return 1/(1-p+p/n);
}

// generate a array to save percent, number of cpu.
var params = [];
for (var p = 80; p <=90; p++)
	for (var n = 40; n <= 80; n++)
		params.push({pf:p/100, core:n});

// output calculate results
params.forEach(function(v){
	var percent = v.pf;
	var cores = v.core;
	var rate = amdahl(percent, cores);
	var output = [
		'percent:', percent, ',',
		'core:', cores, ',',
		'[rate]:', rate, 
	].join(' ');
	console.log(output);
});
