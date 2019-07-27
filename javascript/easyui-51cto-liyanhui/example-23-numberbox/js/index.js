// script for ch23, numberbox
// 依赖于validatebox

$(function(){

	
	$('#box').numberbox({
		
		// 属性列表
		disabled: false,
		value: 0, // default value
		min: 0,
		max: 999999999,
		precision:2,
		decimalSeparator: '.',  // 代替小数点
		groupSeparator: ',', //整数部分的分组
		// prefix:'RMB ',
		// suffix:' RMB',
		
		// Jedi: 不是很理解. 李说-用的很少！
		// filter: function(e) { return false; },
		
		// Jedi: 这个属性是否有点鸡肋
		// Jedi: 应该用于自定义的特殊格式
		// Jedi: 不会改变value的值
		// formatter: function(value) { return '111,' + value;},
		
		// Jedi: 应该会用的更多一点
		// Jedi: 会改变value的值
		// parser : function(value) { return '111,' + value; },
		
		// 事件
		// onChange: function(newValue, oldValue) { alert('newValue is ' + newValue);},
	});
	
	// 方法	
	// console.log($('#box').numberbox('options'));
	// $('#box').numberbox('destroy');
	
	//$('#box').numberbox('disable');
	//$('#box').numberbox('enable');
	
	// $('#box').numberbox('fix');
	// $('#box').numberbox('setValue', 20);
	
	//$(document).click(function(){
		// console.log($('#box').numberbox('getValue'));
		// $('#box').numberbox('clear');
	//});
	
	/*
	$('#box').numberbox('setValue', 2000);
	$(document).click(function(){
		$('#box').numberbox('reset');
	});
	*/
	
});
