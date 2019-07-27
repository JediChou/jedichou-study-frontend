// 用例测试Getweek方法

describe('测试2001至2030内的星期数', function(){
	var weeks = [
		{ year:2001, weeks: 53},
		{ year:2002, weeks: 53},
		{ year:2003, weeks: 53},
		{ year:2004, weeks: 53},
		{ year:2005, weeks: 53},
		{ year:2006, weeks: 53},
		{ year:2007, weeks: 53},
		{ year:2008, weeks: 53},
		{ year:2009, weeks: 53},
		{ year:2010, weeks: 53},
		{ year:2011, weeks: 53},
		{ year:2012, weeks: 54},
		{ year:2013, weeks: 53},
		{ year:2014, weeks: 53},
		{ year:2015, weeks: 53},
		{ year:2016, weeks: 53},
		{ year:2017, weeks: 53},
		{ year:2018, weeks: 53},
		{ year:2019, weeks: 53},
		{ year:2020, weeks: 53},
		{ year:2021, weeks: 53},
		{ year:2022, weeks: 53},
		{ year:2023, weeks: 53},
		{ year:2024, weeks: 53},
		{ year:2025, weeks: 53},
		{ year:2026, weeks: 53},
		{ year:2027, weeks: 53},
		{ year:2028, weeks: 53},
		{ year:2029, weeks: 53},
		{ year:2030, weeks: 53},
	];
	
	it('2001-2030内的周数测试', function(){
		weeks.forEach(function(v){
			var expected_weeks = v.weeks;
			var facted = Getweek(v.year);
			expect(facted).toEqual(expected_weeks);
		});
	});
});