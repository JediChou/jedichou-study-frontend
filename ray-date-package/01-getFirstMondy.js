// 用例测试getFirstMondy方法

describe('测试2001至2030内的第1个星期一', function(){

	/////////////////////// 20001-2010的测试 ///////////////////////
	
	var month1 = [
		{ year: '2001', first: '2001.1.1' },
		{ year: '2002', first: '2002.1.7' },
		{ year: '2003', first: '2003.1.6' },
		{ year: '2004', first: '2004.1.5' },
		{ year: '2005', first: '2005.1.3' },
		{ year: '2006', first: '2006.1.2' },
		{ year: '2007', first: '2007.1.1' },
		{ year: '2008', first: '2008.1.7' },
		{ year: '2009', first: '2009.1.5' },
		{ year: '2010', first: '2010.1.4' }
	];
		
	it('2001-2010内的测试', function(){
		month1.forEach(function(v){
			var expected_year = parseInt(v.first.split('.')[0]);
			var expected_month = parseInt(v.first.split('.')[1]);
			var expected_day = parseInt(v.first.split('.')[2]);
			var facted = getFirstMonday(v.year);

			expect(facted.getFullYear()).toEqual(expected_year);
			expect(facted.getMonth()+1).toEqual(expected_month);
			expect(facted.getDate()).toEqual(expected_day);
		});
	});
	
	
	/////////////////////// 2011-2020的测试 ///////////////////////
	
	var month2 = [
		{ year: '2011', first: '2011.1.3' },
		{ year: '2012', first: '2012.1.2' },
		{ year: '2013', first: '2013.1.7' },
		{ year: '2014', first: '2014.1.6' },
		{ year: '2015', first: '2015.1.5' },
		{ year: '2016', first: '2016.1.4' },
		{ year: '2017', first: '2017.1.2' },
		{ year: '2018', first: '2018.1.1' },
		{ year: '2019', first: '2019.1.7' },
		{ year: '2020', first: '2020.1.6' }
	];
		
	it('2011-2020内的测试', function(){
		month2.forEach(function(v){
			var expected_year = parseInt(v.first.split('.')[0]);
			var expected_month = parseInt(v.first.split('.')[1]);
			var expected_day = parseInt(v.first.split('.')[2]);
			var facted = getFirstMonday(v.year);

			expect(facted.getFullYear()).toEqual(expected_year);
			expect(facted.getMonth()+1).toEqual(expected_month);
			expect(facted.getDate()).toEqual(expected_day);
		});
	});
	
	
	/////////////////////// 2021-2030的测试 ///////////////////////
	
	var month3 = [
		{ year: '2021', first: '2021.1.4' },
		{ year: '2022', first: '2022.1.3' },
		{ year: '2023', first: '2023.1.2' },
		{ year: '2024', first: '2024.1.1' },
		{ year: '2025', first: '2025.1.6' },
		{ year: '2026', first: '2026.1.5' },
		{ year: '2027', first: '2027.1.4' },
		{ year: '2028', first: '2028.1.3' },
		{ year: '2029', first: '2029.1.1' },
		{ year: '2030', first: '2030.1.7' },
	];
	
	it('2021-2030内的测试', function(){
		month3.forEach(function(v){
			var expected_year = parseInt(v.first.split('.')[0]);
			var expected_month = parseInt(v.first.split('.')[1]);
			var expected_day = parseInt(v.first.split('.')[2]);
			var facted = getFirstMonday(v.year);

			expect(facted.getFullYear()).toEqual(expected_year);
			expect(facted.getMonth()+1).toEqual(expected_month);
			expect(facted.getDate()).toEqual(expected_day);
		});
	});
});