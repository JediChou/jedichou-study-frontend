$(function(){
	
	$('#box').dialog({
		title : '警告',
		width : 300,
		height : 250,
		content : '这个一个dialog的示例窗体',
		collapsible : true,
		minimizable : true,
		maximizable : true,
		resizable : false,
		modal : true,

		// 顶部的工具条
		// tips : plain:true 在这里设置无法生效
		toolbar : [
			{ iconCls:'icon-add', handler:function() {alert('this add action');},},
			{ iconCls:'icon-help', handler:function() {alert('this help link');},},
		],
		
		// 底部的按钮
		buttons : [
			{ width:80, text:'OK', plain:true, iconCls:'icon-ok', handler:function(){alert('this ok action');}},
			{width:80, text:'Cancle', plain:true, iconCls:'icon-no', handler:function() {alert('this cancle action');}},
		],
		
		onClose : function(){alert('close this dialog');},
		onBeforeClose : function(){alert('onBeforeClose action');},
		
	});
	
	console.log($('#box').dialog('dialog'));
	
});