// script for ch31, Form
// 无依赖性

$(function(){
	
	// Jedi: 自动提交
	// $('#box').form('submit', {
	
	//*
	$('#box').form({
		
		onSubmit : function(param) {
			// 可以额外增加一些属性
			param.code = '197803061214';
			return $(this).form('validate');
		},
		
		success : function(data) {
			alert(data);
			// var data = eval('(' + data +')');
			// if(data.email) {
			//	alert(data.email);
			// }
		},
		
		url: 'content.php',
	});
	//*/
	
	// load()是给表单填充数据用的，第一种写法
	/*
	$('#box').form('load', {
		name : 'jedichou',
		email : 'skyzhx@163.com',
	}); */
	
	// 需要配合load方法
	//$('#box').form({
		// onBeforeLoad : function(param) {alert('before load');},
		// onLoadSuccess : function(data) {	alert('load success! The email is ' + data.email);},
		// onLoadError : function(data) { alert('load failed');},
	//});
	
	// load()是给表单填充数据用的，第二种写法
	// jedi: 注意json文件中不能有多余的“,”
	
	// $('#box').form('load', 'load.php');
	// $(document).click(function(){
	//	console.log($('#box').form('validate'));
	// });
	
	$('#box').form('disableValidation');
	$('#box').form('enableValidation');
	
});
