describe("获得某月的天数", function(){
	
	function check(v) {
		var testname = v.year + "." + v.month + " " + v.day + "天";
		it(testname, function(){
			var fact = getMonthDays(v.year, v.month);
			expect(fact).toEqual(v.day);
		});
	}
	
	describe("检查2001年", function(){
		var y2001 = [
			{year:2001, month:1, day:31},
			{year:2001, month:2, day:28},
			{year:2001, month:3, day:31},
			{year:2001, month:4, day:30},
			{year:2001, month:5, day:31},
			{year:2001, month:6, day:30},
			{year:2001, month:7, day:31},
			{year:2001, month:8, day:31},
			{year:2001, month:9, day:30},
			{year:2001, month:10, day:31},
			{year:2001, month:11, day:30},
			{year:2001, month:12, day:31},
		];

		y2001.forEach(function(v){ 
			check(v); 
		});
	});
	
	describe("检查2005年", function(){
		var y2005 = [
			{year:2005, month:1, day:31},
			{year:2005, month:2, day:28},
			{year:2005, month:3, day:31},
			{year:2005, month:4, day:30},
			{year:2005, month:5, day:31},
			{year:2005, month:6, day:30},
			{year:2005, month:7, day:31},
			{year:2005, month:8, day:31},
			{year:2005, month:9, day:30},
			{year:2005, month:10, day:31},
			{year:2005, month:11, day:30},
			{year:2005, month:12, day:31},
		];

		y2005.forEach(function(v){ 
			check(v);
		});
	});
	
	describe("检查2010年", function(){
		var y2010 = [
			{year:2010, month:1, day:31},
			{year:2010, month:2, day:28},
			{year:2010, month:3, day:31},
			{year:2010, month:4, day:30},
			{year:2010, month:5, day:31},
			{year:2010, month:6, day:30},
			{year:2010, month:7, day:31},
			{year:2010, month:8, day:31},
			{year:2010, month:9, day:30},
			{year:2010, month:10, day:31},
			{year:2010, month:11, day:30},
			{year:2010, month:12, day:31},
		];

		y2010.forEach(function(v){
			check(v);
		});
	});
	
	describe("检查2011年", function(){
		var y2011 = [
			{year:2011, month:1, day:31},
			{year:2011, month:2, day:28},
			{year:2011, month:3, day:31},
			{year:2011, month:4, day:30},
			{year:2011, month:5, day:31},
			{year:2011, month:6, day:30},
			{year:2011, month:7, day:31},
			{year:2011, month:8, day:31},
			{year:2011, month:9, day:30},
			{year:2011, month:10, day:31},
			{year:2011, month:11, day:30},
			{year:2011, month:12, day:31},
		];

		y2011.forEach(function(v){
			check(v);
		});
	});
	
	describe("检查2016年", function(){
		var y2016 = [
			{year:2016, month:1, day:31},
			{year:2016, month:2, day:29},
			{year:2016, month:3, day:31},
			{year:2016, month:4, day:30},
			{year:2016, month:5, day:31},
			{year:2016, month:6, day:30},
			{year:2016, month:7, day:31},
			{year:2016, month:8, day:31},
			{year:2016, month:9, day:30},
			{year:2016, month:10, day:31},
			{year:2016, month:11, day:30},
			{year:2016, month:12, day:31},
		];

		y2016.forEach(function(v){
			check(v);
		});
	});
	
	describe("检查2017年", function(){
		var y2017 = [
			{year:2017, month:1, day:31},
			{year:2017, month:2, day:28},
			{year:2017, month:3, day:31},
			{year:2017, month:4, day:30},
			{year:2017, month:5, day:31},
			{year:2017, month:6, day:30},
			{year:2017, month:7, day:31},
			{year:2017, month:8, day:31},
			{year:2017, month:9, day:30},
			{year:2017, month:10, day:31},
			{year:2017, month:11, day:30},
			{year:2017, month:12, day:31},
		];

		y2017.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2018年", function(){
		var y2018 = [
			{year:2018, month:1, day:31},
			{year:2018, month:2, day:28},
			{year:2018, month:3, day:31},
			{year:2018, month:4, day:30},
			{year:2018, month:5, day:31},
			{year:2018, month:6, day:30},
			{year:2018, month:7, day:31},
			{year:2018, month:8, day:31},
			{year:2018, month:9, day:30},
			{year:2018, month:10, day:31},
			{year:2018, month:11, day:30},
			{year:2018, month:12, day:31},
		];

		y2018.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2019年", function(){
		var y2019 = [
			{year:2019, month:1, day:31},
			{year:2019, month:2, day:28},
			{year:2019, month:3, day:31},
			{year:2019, month:4, day:30},
			{year:2019, month:5, day:31},
			{year:2019, month:6, day:30},
			{year:2019, month:7, day:31},
			{year:2019, month:8, day:31},
			{year:2019, month:9, day:30},
			{year:2019, month:10, day:31},
			{year:2019, month:11, day:30},
			{year:2019, month:12, day:31},
		];

		y2019.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2019年", function(){
		var y2019 = [
			{year:2019, month:1, day:31},
			{year:2019, month:2, day:28},
			{year:2019, month:3, day:31},
			{year:2019, month:4, day:30},
			{year:2019, month:5, day:31},
			{year:2019, month:6, day:30},
			{year:2019, month:7, day:31},
			{year:2019, month:8, day:31},
			{year:2019, month:9, day:30},
			{year:2019, month:10, day:31},
			{year:2019, month:11, day:30},
			{year:2019, month:12, day:31},
		];

		y2019.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2020年", function(){
		var y2020 = [
			{year:2020, month:1, day:31},
			{year:2020, month:2, day:29},
			{year:2020, month:3, day:31},
			{year:2020, month:4, day:30},
			{year:2020, month:5, day:31},
			{year:2020, month:6, day:30},
			{year:2020, month:7, day:31},
			{year:2020, month:8, day:31},
			{year:2020, month:9, day:30},
			{year:2020, month:10, day:31},
			{year:2020, month:11, day:30},
			{year:2020, month:12, day:31},
		];

		y2020.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2021年", function(){
		var y2021 = [
			{year:2021, month:1, day:31},
			{year:2021, month:2, day:28},
			{year:2021, month:3, day:31},
			{year:2021, month:4, day:30},
			{year:2021, month:5, day:31},
			{year:2021, month:6, day:30},
			{year:2021, month:7, day:31},
			{year:2021, month:8, day:31},
			{year:2021, month:9, day:30},
			{year:2021, month:10, day:31},
			{year:2021, month:11, day:30},
			{year:2021, month:12, day:31},
		];

		y2021.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2025年", function(){
		var y2025 = [
			{year:2025, month:1, day:31},
			{year:2025, month:2, day:28},
			{year:2025, month:3, day:31},
			{year:2025, month:4, day:30},
			{year:2025, month:5, day:31},
			{year:2025, month:6, day:30},
			{year:2025, month:7, day:31},
			{year:2025, month:8, day:31},
			{year:2025, month:9, day:30},
			{year:2025, month:10, day:31},
			{year:2025, month:11, day:30},
			{year:2025, month:12, day:31},
		];

		y2025.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2026年", function(){
		var y2026 = [
			{year:2026, month:1, day:31},
			{year:2026, month:2, day:28},
			{year:2026, month:3, day:31},
			{year:2026, month:4, day:30},
			{year:2026, month:5, day:31},
			{year:2026, month:6, day:30},
			{year:2026, month:7, day:31},
			{year:2026, month:8, day:31},
			{year:2026, month:9, day:30},
			{year:2026, month:10, day:31},
			{year:2026, month:11, day:30},
			{year:2026, month:12, day:31},
		];

		y2026.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2029年", function(){
		var y2029 = [
			{year:2029, month:1, day:31},
			{year:2029, month:2, day:28},
			{year:2029, month:3, day:31},
			{year:2029, month:4, day:30},
			{year:2029, month:5, day:31},
			{year:2029, month:6, day:30},
			{year:2029, month:7, day:31},
			{year:2029, month:8, day:31},
			{year:2029, month:9, day:30},
			{year:2029, month:10, day:31},
			{year:2029, month:11, day:30},
			{year:2029, month:12, day:31},
		];

		y2029.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2030年", function(){
		var y2030 = [
			{year:2030, month:1, day:31},
			{year:2030, month:2, day:28},
			{year:2030, month:3, day:31},
			{year:2030, month:4, day:30},
			{year:2030, month:5, day:31},
			{year:2030, month:6, day:30},
			{year:2030, month:7, day:31},
			{year:2030, month:8, day:31},
			{year:2030, month:9, day:30},
			{year:2030, month:10, day:31},
			{year:2030, month:11, day:30},
			{year:2030, month:12, day:31},
		];

		y2030.forEach(function(v){
			check(v);
		});
	});
	
	
	describe("检查2031年", function(){
		var y2031 = [
			{year:2031, month:1, day:31},
			{year:2031, month:2, day:28},
			{year:2031, month:3, day:31},
			{year:2031, month:4, day:30},
			{year:2031, month:5, day:31},
			{year:2031, month:6, day:30},
			{year:2031, month:7, day:31},
			{year:2031, month:8, day:31},
			{year:2031, month:9, day:30},
			{year:2031, month:10, day:31},
			{year:2031, month:11, day:30},
			{year:2031, month:12, day:31},
		];

		y2031.forEach(function(v){
			check(v);
		});
	});
	
});