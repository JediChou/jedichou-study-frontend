// script for ch28, TimeSpinner

$(function(){
	$('#box').timespinner({
		// 属性
		value : '00:10',
		// min : '00:00',
		// max : '23:59',
		// separator : ': ',
		// showSeconds: true,
		// highlight: 0,
	});
	
	// 方法
	// console.log($('#box').timespinner('options'));
	// $('#box').timespinner('setValue', '17:45');
	// console.log($('#box').timespinner('getHours'));
	// console.log($('#box').timespinner('getMinutes'));
	// console.log($('#box').timespinner('getSeconds'));
	
});
