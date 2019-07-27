describe("测试时间格式化", function(){
	
	describe("常规测试", function(){
			
		var dates = [
			{date:"2001.1.31", expect:"2001/01/31"},
			{date:"2001.2.28", expect:"2001/02/28"},
			{date:"2001.3.31", expect:"2001/03/31"},
			{date:"2001.4.30", expect:"2001/04/30"},
			{date:"2001.5.31", expect:"2001/05/31"},
			{date:"2001.6.30", expect:"2001/06/30"},
			{date:"2001.7.31", expect:"2001/07/31"},
			{date:"2001.8.31", expect:"2001/08/31"},
			{date:"2001.9.30", expect:"2001/09/30"},
			{date:"2001.10.31", expect:"2001/10/31"},
			{date:"2001.11.30", expect:"2001/11/30"},
			{date:"2001.12.31", expect:"2001/12/31"},
			{date:"2005.1.31", expect:"2005/01/31"},
			{date:"2005.2.28", expect:"2005/02/28"},
			{date:"2005.3.31", expect:"2005/03/31"},
			{date:"2005.4.30", expect:"2005/04/30"},
			{date:"2005.5.31", expect:"2005/05/31"},
			{date:"2005.6.30", expect:"2005/06/30"},
			{date:"2005.7.31", expect:"2005/07/31"},
			{date:"2005.8.31", expect:"2005/08/31"},
			{date:"2005.9.30", expect:"2005/09/30"},
			{date:"2005.10.31", expect:"2005/10/31"},
			{date:"2005.11.30", expect:"2005/11/30"},
			{date:"2005.12.31", expect:"2005/12/31"},
			{date:"2010.1.31", expect:"2010/01/31"},
			{date:"2010.2.28", expect:"2010/02/28"},
			{date:"2010.3.31", expect:"2010/03/31"},
			{date:"2010.4.30", expect:"2010/04/30"},
			{date:"2010.5.31", expect:"2010/05/31"},
			{date:"2010.6.30", expect:"2010/06/30"},
			{date:"2010.7.31", expect:"2010/07/31"},
			{date:"2010.8.31", expect:"2010/08/31"},
			{date:"2010.9.30", expect:"2010/09/30"},
			{date:"2010.10.31", expect:"2010/10/31"},
			{date:"2010.11.30", expect:"2010/11/30"},
			{date:"2010.12.31", expect:"2010/12/31"},
			{date:"2011.1.31", expect:"2011/01/31"},
			{date:"2011.2.28", expect:"2011/02/28"},
			{date:"2011.3.31", expect:"2011/03/31"},
			{date:"2011.4.30", expect:"2011/04/30"},
			{date:"2011.5.31", expect:"2011/05/31"},
			{date:"2011.6.30", expect:"2011/06/30"},
			{date:"2011.7.31", expect:"2011/07/31"},
			{date:"2011.8.31", expect:"2011/08/31"},
			{date:"2011.9.30", expect:"2011/09/30"},
			{date:"2011.10.31", expect:"2011/10/31"},
			{date:"2011.11.30", expect:"2011/11/30"},
			{date:"2011.12.31", expect:"2011/12/31"},
			{date:"2016.1.31", expect:"2016/01/31"},
			{date:"2016.2.29", expect:"2016/02/29"},
			{date:"2016.3.31", expect:"2016/03/31"},
			{date:"2016.4.30", expect:"2016/04/30"},
			{date:"2016.5.31", expect:"2016/05/31"},
			{date:"2016.6.30", expect:"2016/06/30"},
			{date:"2016.7.31", expect:"2016/07/31"},
			{date:"2016.8.31", expect:"2016/08/31"},
			{date:"2016.9.30", expect:"2016/09/30"},
			{date:"2016.10.31", expect:"2016/10/31"},
			{date:"2016.11.30", expect:"2016/11/30"},
			{date:"2016.12.31", expect:"2016/12/31"},
			{date:"2017.1.31", expect:"2017/01/31"},
			{date:"2017.2.28", expect:"2017/02/28"},
			{date:"2017.3.31", expect:"2017/03/31"},
			{date:"2017.4.30", expect:"2017/04/30"},
			{date:"2017.5.31", expect:"2017/05/31"},
			{date:"2017.6.30", expect:"2017/06/30"},
			{date:"2017.7.31", expect:"2017/07/31"},
			{date:"2017.8.31", expect:"2017/08/31"},
			{date:"2017.9.30", expect:"2017/09/30"},
			{date:"2017.10.31", expect:"2017/10/31"},
			{date:"2017.11.30", expect:"2017/11/30"},
			{date:"2017.12.31", expect:"2017/12/31"},
			{date:"2018.1.31", expect:"2018/01/31"},
			{date:"2018.2.28", expect:"2018/02/28"},
			{date:"2018.3.31", expect:"2018/03/31"},
			{date:"2018.4.30", expect:"2018/04/30"},
			{date:"2018.5.31", expect:"2018/05/31"},
			{date:"2018.6.30", expect:"2018/06/30"},
			{date:"2018.7.31", expect:"2018/07/31"},
			{date:"2018.8.31", expect:"2018/08/31"},
			{date:"2018.9.30", expect:"2018/09/30"},
			{date:"2018.10.31", expect:"2018/10/31"},
			{date:"2018.11.30", expect:"2018/11/30"},
			{date:"2018.12.31", expect:"2018/12/31"},
			{date:"2019.1.31", expect:"2019/01/31"},
			{date:"2019.2.28", expect:"2019/02/28"},
			{date:"2019.3.31", expect:"2019/03/31"},
			{date:"2019.4.30", expect:"2019/04/30"},
			{date:"2019.5.31", expect:"2019/05/31"},
			{date:"2019.6.30", expect:"2019/06/30"},
			{date:"2019.7.31", expect:"2019/07/31"},
			{date:"2019.8.31", expect:"2019/08/31"},
			{date:"2019.9.30", expect:"2019/09/30"},
			{date:"2019.10.31", expect:"2019/10/31"},
			{date:"2019.11.30", expect:"2019/11/30"},
			{date:"2019.12.31", expect:"2019/12/31"},
			{date:"2019.1.31", expect:"2019/01/31"},
			{date:"2019.2.28", expect:"2019/02/28"},
			{date:"2019.3.31", expect:"2019/03/31"},
			{date:"2019.4.30", expect:"2019/04/30"},
			{date:"2019.5.31", expect:"2019/05/31"},
			{date:"2019.6.30", expect:"2019/06/30"},
			{date:"2019.7.31", expect:"2019/07/31"},
			{date:"2019.8.31", expect:"2019/08/31"},
			{date:"2019.9.30", expect:"2019/09/30"},
			{date:"2019.10.31", expect:"2019/10/31"},
			{date:"2019.11.30", expect:"2019/11/30"},
			{date:"2019.12.31", expect:"2019/12/31"},
			{date:"2020.1.31", expect:"2020/01/31"},
			{date:"2020.2.29", expect:"2020/02/29"},
			{date:"2020.3.31", expect:"2020/03/31"},
			{date:"2020.4.30", expect:"2020/04/30"},
			{date:"2020.5.31", expect:"2020/05/31"},
			{date:"2020.6.30", expect:"2020/06/30"},
			{date:"2020.7.31", expect:"2020/07/31"},
			{date:"2020.8.31", expect:"2020/08/31"},
			{date:"2020.9.30", expect:"2020/09/30"},
			{date:"2020.10.31", expect:"2020/10/31"},
			{date:"2020.11.30", expect:"2020/11/30"},
			{date:"2020.12.31", expect:"2020/12/31"},
			{date:"2021.1.31", expect:"2021/01/31"},
			{date:"2021.2.28", expect:"2021/02/28"},
			{date:"2021.3.31", expect:"2021/03/31"},
			{date:"2021.4.30", expect:"2021/04/30"},
			{date:"2021.5.31", expect:"2021/05/31"},
			{date:"2021.6.30", expect:"2021/06/30"},
			{date:"2021.7.31", expect:"2021/07/31"},
			{date:"2021.8.31", expect:"2021/08/31"},
			{date:"2021.9.30", expect:"2021/09/30"},
			{date:"2021.10.31", expect:"2021/10/31"},
			{date:"2021.11.30", expect:"2021/11/30"},
			{date:"2021.12.31", expect:"2021/12/31"},
			{date:"2025.1.31", expect:"2025/01/31"},
			{date:"2025.2.28", expect:"2025/02/28"},
			{date:"2025.3.31", expect:"2025/03/31"},
			{date:"2025.4.30", expect:"2025/04/30"},
			{date:"2025.5.31", expect:"2025/05/31"},
			{date:"2025.6.30", expect:"2025/06/30"},
			{date:"2025.7.31", expect:"2025/07/31"},
			{date:"2025.8.31", expect:"2025/08/31"},
			{date:"2025.9.30", expect:"2025/09/30"},
			{date:"2025.10.31", expect:"2025/10/31"},
			{date:"2025.11.30", expect:"2025/11/30"},
			{date:"2025.12.31", expect:"2025/12/31"},
			{date:"2026.1.31", expect:"2026/01/31"},
			{date:"2026.2.28", expect:"2026/02/28"},
			{date:"2026.3.31", expect:"2026/03/31"},
			{date:"2026.4.30", expect:"2026/04/30"},
			{date:"2026.5.31", expect:"2026/05/31"},
			{date:"2026.6.30", expect:"2026/06/30"},
			{date:"2026.7.31", expect:"2026/07/31"},
			{date:"2026.8.31", expect:"2026/08/31"},
			{date:"2026.9.30", expect:"2026/09/30"},
			{date:"2026.10.31", expect:"2026/10/31"},
			{date:"2026.11.30", expect:"2026/11/30"},
			{date:"2026.12.31", expect:"2026/12/31"},
			{date:"2029.1.31", expect:"2029/01/31"},
			{date:"2029.2.28", expect:"2029/02/28"},
			{date:"2029.3.31", expect:"2029/03/31"},
			{date:"2029.4.30", expect:"2029/04/30"},
			{date:"2029.5.31", expect:"2029/05/31"},
			{date:"2029.6.30", expect:"2029/06/30"},
			{date:"2029.7.31", expect:"2029/07/31"},
			{date:"2029.8.31", expect:"2029/08/31"},
			{date:"2029.9.30", expect:"2029/09/30"},
			{date:"2029.10.31", expect:"2029/10/31"},
			{date:"2029.11.30", expect:"2029/11/30"},
			{date:"2029.12.31", expect:"2029/12/31"},
			{date:"2030.1.31", expect:"2030/01/31"},
			{date:"2030.2.28", expect:"2030/02/28"},
			{date:"2030.3.31", expect:"2030/03/31"},
			{date:"2030.4.30", expect:"2030/04/30"},
			{date:"2030.5.31", expect:"2030/05/31"},
			{date:"2030.6.30", expect:"2030/06/30"},
			{date:"2030.7.31", expect:"2030/07/31"},
			{date:"2030.8.31", expect:"2030/08/31"},
			{date:"2030.9.30", expect:"2030/09/30"},
			{date:"2030.10.31", expect:"2030/10/31"},
			{date:"2030.11.30", expect:"2030/11/30"},
			{date:"2030.12.31", expect:"2030/12/31"},
			{date:"2031.1.31", expect:"2031/01/31"},
			{date:"2031.2.28", expect:"2031/02/28"},
			{date:"2031.3.31", expect:"2031/03/31"},
			{date:"2031.4.30", expect:"2031/04/30"},
			{date:"2031.5.31", expect:"2031/05/31"},
			{date:"2031.6.30", expect:"2031/06/30"},
			{date:"2031.7.31", expect:"2031/07/31"},
			{date:"2031.8.31", expect:"2031/08/31"},
			{date:"2031.9.30", expect:"2031/09/30"},
			{date:"2031.10.31", expect:"2031/10/31"},
			{date:"2031.11.30", expect:"2031/11/30"},
			{date:"2031.12.31", expect:"2031/12/31"},
		];
		
		function check(v) {
			var name = v.date + " 格式化测试";
			it(name, function(){
				var arr = v.date.split('.');
				var year = arr[0];
				var mth = arr[1]-1;
				var day = arr[2];
				var date = new Date(year, mth, day);
				var fact = FormatDate(date);
				var expected = v.expect;
				expect(fact).toEqual(expected);
			});
		}
		
		dates.forEach(function(v){
			check(v);
		});
		
	});
	
	describe("5种日期初始化", function(){
		
		it("第一种初始化:Date(month dd,yyyy hh:mm:ss)", function(){
			var date = new Date("Tue Dec 13 2016 11:57:37");
			var fact = FormatDate(date);
			var expected = "2016/12/13";
			expect(fact).toEqual(expected);
		});
		
		it("第二种初始化:Date(month dd,yyyy)", function(){
			var date = new Date("Tue Dec 13 2016");
			var fact = FormatDate(date);
			var expected = "2016/12/13";
			expect(fact).toEqual(expected);
		});
		
		it("第三种初始化:Date(yyyy,mth,dd,hh,mm,ss)", function(){
			var date = new Date(2016,11,13,11,57,37);
			var fact = FormatDate(date);
			var expected = "2016/12/13";
			expect(fact).toEqual(expected);
		});
		
		it("第四种初始化:Date(yyyy,mth,dd)", function(){
			var date = new Date(2016,11,13);
			var fact = FormatDate(date);
			var expected = "2016/12/13";
			expect(fact).toEqual(expected);
		});
		
		it("第五种初始化:Date(ms)", function(){
			var date = new Date(1481630663581);
			var fact = FormatDate(date);
			var expected = "2016/12/13";
			expect(fact).toEqual(expected);
		});
		
	});
	
});