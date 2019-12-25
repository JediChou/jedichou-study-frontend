($function(){
	// resizable
	$('#rr').resizable({
		// disabled : true;
		// handles : 'e,s,se',
		// minWidth : 200,
		// minHeight : 200,
		// maxWidth : 600,
		// maxHeight : 400,
		// edge : 50,  // 邊緣

		// event-onStartResize
		// onStartResize : function(e) {
		// 	console.log('開始調整的時候觸發');
		// },

		// onResize : function(e) {
		// 	console.log('調整期間觸發');
		// 	// return false;
		// },

		// onStopResize : function(e) {
		// 	console.log('停止調整時觸發');
		// }
	});

	console.log($('#rr').resizable('options'));

	$('#rr').resizable('disable');
	
});