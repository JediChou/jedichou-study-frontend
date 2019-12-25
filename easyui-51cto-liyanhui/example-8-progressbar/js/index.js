$(function(){

	// 修改默认值
	$.fn.progressbar.defaults.value = 20;

	$('#box').progressbar({
		//property
		width: 400,
		heigth: 30,
		// value : 30,
		text : '{value}%',

		// event
		// onChange : function(newValue, oldValue) {
		// 	console.log('new:'+newValue + ', old'+oldValue);
		// },

	});

	// setTimeout(function(){
	// 	$('#box').progressbar('setValue',70);
	// })

	// setInterval(function() {
	// 	$('#box').progressbar('setValue', $('#box').progressbar('getValue')+5 );
	// }, 200);

	// console.log($('#box').progressbar('options'));
	// $('#box').progressbar('resize', 600);

});
