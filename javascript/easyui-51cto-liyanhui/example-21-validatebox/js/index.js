$(function(){
	
	// jedi: 这个比较重要
	$.extend($.fn.validatebox.default.rules, {
		minLength : {
			validator : function(value, param{
				return value.length >= param;
			},
			message: '{0}'
		},
	});
	
	// 属性列表
	$('#email').validatebox({
		required : true,
		// validType : 'email',
		// validType : 'url',
		// validType : 'length[2,10]',
		// validType : 'remote["content.php","abc"]',
		// validType : ['email', 'length[5,10]'], 
		// delay : 1, 
		// missingMessage : '',
		// invalidMessage : '',
		// tipPosition: 'left'
		// deltaX : 100,
		// novalidate : true,
	});
	
	// 方法
	// $('#email').validatebox('options');
	// $('#email').validatebox('destroy');
	
	// $(document).click(function(){
		// console.log($('#email').validatebox('validate'));
		// console.log($('#email').validatebox('isValid'));
	// });
	
	// $('#email').validatebox('disableValidation');
	// $('#email').validatebox('enableValidation');
	
	
});
