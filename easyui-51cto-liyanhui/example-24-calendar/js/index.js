// script for ch24, Calendar
// 不依赖于其他组件

$(function(){

	$('#box').calendar({
	
		// 属性列表
		// width: 500,
		// height: 180,
		// fit:true,
		border:true,
		// firstDay: 1,
		// weeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		// months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		// year: 4, // 默认值
		// month: 1,  // 默认值
		// current: new Date(),
		// current: new Date(2015, 6, 3),
		
		// 注意是getDate(), 不是GetDate()
		// formatter : function(date) { return date.getDate(); },
		// formatter : function(date) { return '#' + date.getDate(); },
		
		// Jedi: 给特定日期加特定样式
		styler : function(date) {
			// if(date.getDay() == 1){ return 'background-color:#ccc';}
			// if(date.getMonth() == 0) {return 'background-color:#ccc';}
			// if(date.getDate() == 1) { return 'background-color:#ccc';}
		},
		
		
		// Jedi: 不是很理
		// Jedi: 设置可用或非可用状态
		validator : function(date) {
			if (date.getDay() == 1) {
				// 设置成只有星期一是可以点击的
				return true;
			} else {
				return false;
			}
		},
	
		// 事件
		// Jedi: 注意那个getMonth()是从0开始的
		// onSelect : function(date) { alert(date.getFullYear()+":"+(date.getMonth()+1)+":"+date.getDate()); },
		// onChange : function(){ alert('change event'); },
		
	});
	
	// 方法	
	// console.log($('#box').calendar('options'));
	
	// resize - Jedi: 有点疑问
	// $('#box').calendar({width:600});
	// $(document).click(function(){
	// 	$('#box').calendar('resize');
	// });
	
	// $('#box').calendar('moveTo', new Date('1978, 6, 3'));
	
});
