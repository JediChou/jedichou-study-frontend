$(function(){

	$.fn.linkbutton.defaults.iconCls = 'icon-add';

	$('#box').linkbutton({
		// property
		// id : 'pox',
		// disabled : true,
		// toggle : true,
		// selected : true,
		// group : 'sex',
		// plain : true,
		// text : '文字',
		// iconCls : 'icon-add',
		// iconAlign : 'right',
	});

	$('#pox').linkbutton({
		// toggle : true,
		// group : 'sex',
		// iconCls : 'icon-mini-add',
	});

	// console.log($('#box').linkbutton('options'));
	// $('#box').linkbutton('disable');
	// $('#box').linkbutton('enable');

	// $('#box').linkbutton('select')
	// $('#box').linkbutton('unselect')

});
