$(function(){
	$('#box').tooltip({
		content : '<b>這裡是內容提示框</b>',
		// position : 'top',
		// trackMouse : true,
		// deltaX : 100,
		// deltaY : 100,
		// showEvent : 'click',
		// hideEvent : 'dblclick',
		// showDelay : 500,
		// hideDelay : 500,

		// onShow : function(e) {
		// 	// alert('顯示的時候觸發');
		// 	// console.log($('#box').tooltip('tip')); 
		// 	// console.log($('#box').tooltip('arrow')); 
		// 	$('.tooltip-bottom').css('left', 500);
		// },

		// onHide : function(e) {
		// 	// alert('隱藏的時候觸發');
		// 	$('#box').tooltip('reposition');
		// },

		// onUpdate : function(content) {
		// 	alert('內容改變了：' + content);
		// },

		// onPosition : function(left, top) {
		// 	console.log('left:' + left + ", " + "top:" + top);
		// },

		// 当前版本似乎没有onDestroy事件
		// onDestroy : function(e) {
		// 	alert('dfafd');
		// },
	});
});


// $('#box').click(function(){
	// $(this).tooltip('update', '改變了');
	// $(this).tooltip('destroy');
// });

// 当前似乎没有这个方法
// console.log($('#box').tooltip('options')); 

// $('#box').tooltip('show');
// $('#box').tooltip('hide');

// console.log($('#box').tooltip('tip')); 

