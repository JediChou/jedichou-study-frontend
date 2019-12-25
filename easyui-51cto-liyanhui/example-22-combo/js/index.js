$(function(){

	// 属性列表
	$('#box').combo({
		width: 300,
		height: 50,
		// panelWidth : 300,
		// panelHeight : 300,
		editable: true,
		// disabled: true,
		// readonly: true,
		// hasDownArrow:false,
		// value: '123',
		// multiple: true,
		required: true,
		
		/*
		onShowPanel: function(){
			alert('显示触发');
		}, */
		
		/*
		onHidePanel: function() {
			alert('隐藏触发');
		}, */
		
		/*
		onChange : function(newValue, oldValue){
			alert(newValue + "|" + oldValue);
		},*/
		
	});
	
	// 方法	
	// console.log($('#box').combo('panel'));
	$('#food').appendTo($('#box').combo('panel'));
	$('#food input').click(function(){
		var v = $(this).val();
		var t = $(this).next('span').text();
		// alert(t);
		$('#box').combo('setValue', v).combo('setText', t);
		$('#box').combo('hidePanel');
	});
	
	// console.log($('#box').combo('options'));
	// console.log($('#box').combo('textbox'));
	// $('#box').combo('destroy');
	
	// resize method
	
	$(document).click(function(){
		// $('#box').combo('resize', {width:200, height:300});
		// $('#box').combo('showPanel');
		// $('#box').combo('hidePanel');
		// $('#box').combo('disable');
		// $('#box').combo('enable');
		// console.log($('#box').combo('isValid'));
		// $('#box').combo('clear');
		// console.log($('#box').combo('getText'));
		// console.log($('#box').combo('getValue'));
		
		// $('#box').combo('setValues', ['01','02']);
		// console.log($('#box').combo('getValues'));
	});
	
});
