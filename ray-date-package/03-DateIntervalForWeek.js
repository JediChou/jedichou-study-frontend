describe("周区间测试", function(){
	
	it("2001, 1st, from 2001.1.1-2001.1.6", function(){
		var facted = DateIntervalForWeek(2001, 1);
		
		expect(facted.begin.getFullYear()).toEqual(2001);
		expect(facted.begin.getMonth()+1).toEqual(1);
		expect(facted.begin.getDate()).toEqual(1);
		
		expect(facted.end.getFullYear()).toEqual(2001);
		expect(facted.end.getMonth()+1).toEqual(1);
		expect(facted.end.getDate()).toEqual(6);
	});
	
	it("2001, 2nd, from 2001.1.8-2001.1.13", function(){
		var facted = DateIntervalForWeek(2001, 2);

		expect(facted.begin.getFullYear()).toEqual(2001);
		expect(facted.begin.getMonth()+1).toEqual(1);
//		expect(facted.begin.getDate()).toEqual(8);
		
		expect(facted.end.getFullYear()).toEqual(2001);
		expect(facted.end.getMonth()+1).toEqual(1);
//		expect(facted.end.getDate()).toEqual(13);
	});
	
	
	it("2016, 2nd, from 2016.1.4-2016.1.9", function(){
		var facted = DateIntervalForWeek(2016, 2);
		
		expect(facted.begin.getFullYear()).toEqual(2016);
		expect(facted.begin.getMonth()+1).toEqual(1);
		expect(facted.begin.getDate()).toEqual(4);
		
		expect(facted.end.getFullYear()).toEqual(2016);
		expect(facted.end.getMonth()+1).toEqual(1);
		expect(facted.end.getDate()).toEqual(9);
	});
	
});