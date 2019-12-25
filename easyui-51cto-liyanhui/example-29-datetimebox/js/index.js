// script for ch29, DateTimeBox
// inherit from datebox, timespinner

$(function(){
	$('#box').datetimebox({
		/*
		// 属性
		width: 200,
		required: true,
		value: "2015-1-1 12:30",
		spinnerWidth : 200,
		// timeSeparator: ':',
		showSeconds : false,
		*/
	});
	
	// 方法
	// console.log($('#box').datetimebox('options'));
	// console.log($('#box').datetimebox('spinner').spinner('getValue'));  // Jedi: 这个地方有点问题，要在调试下（和视频不一致）
	// console.log($('#box').datetimebox('setValue', '2014-12-12 12:12')); 
	
});
