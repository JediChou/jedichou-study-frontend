$(function(){

	$('#box').accordion({

		///////////////////////////////////////
		// property                          //
		///////////////////////////////////////
		width : 500,
		height: 300,
		// fit : true,
		// border : false,
		// animate : false,
		multiple : true,
		selected : 1,


		///////////////////////////////////////
		// event                             //
		///////////////////////////////////////
		// onSelect : function(title, index) {alert(title+'|'+index);}
		// onUnselect : function(title, index) {alert(title+'|'+index);}
		
		/*
		onAdd : function(title, index) {
			alert(title + ',' + index);
		},
		*/
		
		//onBeforeRemove : function(title, index) {
		//	alert(title + ',' + index);
		//},
		
		//onRemove : function(title, index) {
		//	alert(title + ',' + index);
		//},
	});


	///////////////////////////////////////
	// method                            //
	// 定义在 (function(){}, <here>);
	///////////////////////////////////////

	// console.log($('#box').accordion('options'));

	// console.log($('#box').accordion('panels'));

	// $(document).click(function(){
	// 	$('#box').accordion().hide();
	// 	$('#box').accordion().show();  // 页面会变形
	// 	$('#box').accordion('resize');
	// });

	// console.log($('#box').accordion('getSelected'));

	// $(document).click(function(){
	// 	console.log($('#box').accordion('getSelections'));
	// });

	// console.log($('#box').accordion('getPanel', 1));
	// console.log($('#box').accordion('getPanelIndex', 1));	// TODO, 没找到
	// console.log($('#box').accordion('select'));
	// $('#box').accordion('unselect', 0);
	
	/*
	$('#box').accordion('add', {
		title : '新面板',
	//	content : 'this is new panel for accordion',
	//	closable : true,
	//	onClose : function() {
	//		alert('oops, i\'m closed');
	//	},
		select : false,
		collapsible : false,
	});
	*/
	
	//$('#box').accordion('remove', 0);
	
	
});
