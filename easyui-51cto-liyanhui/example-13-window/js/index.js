$(function(){
	
	//$('#box').window({
		//width : 400,
		//height : 400,
		//title : '中文窗口',
		//collapsible : false,
		//minimizable : false,
		//maximizable : true,
		// closable : false,
		// closed : true,
		// zIndex : 9999,
		// draggable : false,
		// resizable : false, 
		// shadow : true,
		// inline : false,
		// modal : true,
		
		// from panel
		// fit : false,
		//iconCls : "icon-add",
		
		
		// 在加载内容页之前触发，返回false将忽略该动作。
		//（该事件自1.3.6版开始可用）
		// onBeforeLoad : function(title){
		//	alert(title);
		// },	 
		
		// onLoad 在加载远程数据时触发。 
		// onLoadError 在加载内容页发生错误时触发。（该事件自1.3.6版开始可用） 
		// onBeforeOpen 在打开面板之前触发，返回false可以取消打开操作。 
		// onOpen none 在打开面板之后触发。 
		// onBeforeClose 在关闭面板之前触发，返回false可以取消关闭操作。下列的面板将不能关闭。
		
		// onClose 在面板关闭之后触发。 
		//onClose : function() {
		//	alert("oops! I'm closed.");
		//}, 
		
		// onBeforeDestroy 在面板销毁之前触发，返回false可以取消销毁操作。 
		// onDestroy 在面板销毁之后触发。 
		// onBeforeCollapse 在面板折叠之前触发，返回false可以终止折叠操作。 
		// onCollapse 在面板折叠之后触发。 
		// onBeforeExpand 在面板展开之前触发，返回false可以终止展开操作。 
		// onExpand 在面板展开之后触发。 
		// onResize 参数(width, height)在面板改变大小之后触发。
		// onMove 参数(left,top) 在面板移动之后触发。
		// onMaximize : function(){alert("oops! I'm closed.");}, //在窗口最大化之后触发。 
		// onRestore 在窗口恢复到原始大小以后触发。 
		// onMinimize 在窗口最小化之后触发。 
	//});
	
	//console.log($('#box').window('options'));
	
	// console.log($('#box').window('window'));
	// console.log($('#box').window('body')); //TODO, Jedi-如何取得具体的值
	
	// hcenter, vcenter, center
	
	/*
	$(document).click(function(){
		$('#box').window('move', {
			left : 0,
			top : 0
		});
	});
	$(document).dblclick(function(){
		// $('#box').window('center');
		// $('#box').window('hcenter');
		$('#box').window('vcenter');
	});
	*/
	
	$(document).click(function(){
		$("<div></div>").dialog({
			width : 400,
			height : 400,
			title : '中文窗口',
			modal : true,
		});
	});
	
	
});
