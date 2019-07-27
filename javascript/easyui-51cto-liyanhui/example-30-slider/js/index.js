// script for ch30, Slider
// inherit from draggable
// notice: Jedi, 要重新理解下margin标签的意义

$(function(){
	$('#box').slider({
		// 属性
		width: 200,
		// height: 200,
		// mode: 'h',
		// reversed: false,
		showTip: true,
		disabled: false,
		value: 30,
		min: 0,
		max: 100,
		step: 2,
		rule: [0, '|', 20, '|', 40, '|', 60, '|', 80, '|', 100],
		
		tipFormatter : function(value) {
			return 'Speed:' + value + '%';
		},
		
		// Jedi: 这里不是很懂
		converter : {
			toPosition:function(value, size){
				var opts = $(this).slider('options');
				return (value-opts.min)/(opts.max-opts.min)*size;
			},
			toValue:function(pos, size){
				var opts = $(this).slider('options');
				return opts.min + (opts.max-opts.min)*(pos/size);
			}
		},
		
		// 事件	
		// onSlideStart : function(value) { alert("在开始拖拽滑动条的时候触发");},
		// onSlideEnd   : function(value) { alert("在结束拖拽滑动条的时候触发");},
		// onComplete   : function(value) { alert("在滑块值被用户改变的时候触发");},
		// onChange:function(newValue, oldValue) { alert(""在字段值更改的时候触发: " + newValue + "|" + oldValue);},
		onChange:function(newValue, oldValue) {
			// Use DOM
			// document.getElementById("oldValue").innerHTML = "Old Value: " + oldValue + '%';
			// document.getElementById("newValue").innerHTML = "New Value: " + newValue + '%';
			// document.getElementById("current").innerHTML  = "current value : " + newValue + '%';
			
			// Use jQuery
			$("#oldValue").html("Old Value: " + oldValue + '%');
			$("#newValue").html("<b>New Value: " + newValue + '%</b>');
			$("#current").html("current value : " + newValue + '%');
		},
		
	});
	
	// 方法
	// console.log($('#box').slider('options'));
	// $('#box').slider('destroy');
	// $('#box').slider('resize', {width:300});
	
	// $('#box').slider('setValue', 20);
	// console.log($('#box').slider('getValue'));
	
	// $('#box').slider('clear');
	// $('#box').slider('reset');
	
	// $('#box').slider('disable');
	// $('#box').slider('enable');
});
