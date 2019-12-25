$(function(){
	
	///////////////////////
	// ok and cancel button
	// 修改默认值()
	$.messager.defaults = {
		ok:'是', cancel:'否'
	};
	
	//////////////////
	// alert messager
	/* 
	$.messager.alert('alert messager', 'this is compiler warning.', 'error', function(){
		alert('you must fix this error to complete easyui-alert messager execute.');
	});
	*/
	
	///////////////////
	// confirm messager
	//* 
	$.messager.confirm('confirm messager', 'do you want delete it', function(flag){
		if(flag) {alert('ok');} else {alert('ok, remove cancel');}
	});
	//*/
	
	//////////////////
	/* prompt messager
	$.messager.prompt('prompt', 'please input your message', function(message){
		alert('your message is: '+message);
	});
	*/
	
	/////////////////////
	// progress messager
	/*
	$.messager.progress({
		title:'compile',
		msg:'please wait compile completed',
		text: '{value}%',
		//interval:300,
	});
	*/
	/*
	$(document).click(function(){
		$.messager.progress('close');
	});
	*/
	// 获取进度条对象
	// console.log($.messager.progress('bar'));
	// $.messager.progress('close');
	
	////////////////
	// show messager
	/*
	$.messager.show({
		title: 'your message',
		msg:'message',
		timeout:1000,
		showType: 'fade',
		// style: {top:200, left:200},
	});
	*/
	
});
