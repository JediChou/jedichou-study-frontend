// script for ch25, datebox
// 依赖于combo, calendar

$(function(){

	// 扩展本身的button（通过jQuery插件的方式进行）
	/*
	var buttons = $.extend([], $.fn.datebox.defaults.buttons);
	buttons.splice(1, 0, {
		text: 'MyBtn',
		handler: function(target) {
			alert('click MyBtn');
		}
	});
	*/

	$('#box').datebox({
	
		// 属性列表
		// panelWidth: 300,
		// panelHeight: 300,
		// currentText: '今天',
		// closeText:'close',
		// okText : 'Jedi OK', // 有问题，其他组件继承后来使用
		// disabled: true,
		
		// 这个地方要注意
		// buttons: [{text:"Jedi", iconCls:'icon-add', handler:function(){alert('something?');}}],
		// buttons: buttons,
	
		sharedCalendar : '#cc',
		// formatter : function(date) { return '#' + date;},
		formatter : function(date) {
			// return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
			return (date.getFullYear()+ '/' + (date.getMonth()+1) + '/' + date.getDate());
		},
		
		// Jedi: 解析当前日期。如果无法解析，就返回当前时间。
		parser : function(s) {
			var t = Date.parse(s);
			if(!isNaN(t)) return new Date(t);
			else return new Date();
		},
	
		// 事件
		//onSelect : function(date) {
			// alert(date);
			// console.log(date);
		//}, 
		
	});
	
	// 方法	
	// console.log($('#box').datebox('options'));
	// $('#box').datebox('calendar'); // 意义在哪里(原来是获取内置的日历)
	
	// Jedi: 这里的Value（在月份上不用减1）
	// $('#box').datebox('setValue', '2015-6-3');
	
	// for sharedCalendar property
	$('#cc').calendar({
		firstDay : 1,
	});

	
});
