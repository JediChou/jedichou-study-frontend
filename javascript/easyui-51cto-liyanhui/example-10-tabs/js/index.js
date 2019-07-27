$(function(){

	$('#box').tabs({

		///////////////////////////////////////
		// property                          //
		///////////////////////////////////////

		width : 500,
		// height : 100,
		// plain : true,
		// fit : true, 
		// border : false,
		// tabWidth : 300,
		// tabHeight : 300,
		// scrollIncrement : 50,
		// scrollDuration: 20,

		// tools : [
		// 	{
		// 		iconCls : 'icon-add',
		// 		handler : function() {
		// 			alert('prepare to add');
		// 		},
		// 	}, 
		// 	{
		// 		iconCls : 'icon-remove',
		// 		handler : function() {
		// 			alert('prepare to remove');
		// 		},
		// 	}
		// ],
		tools : '#tt',
		// toolPosition : 'left',
		// tabPosition : 'right',
		// headerWidth : 300,
		// selected : 'tab2',
		selected : 1,
		// showHeader :  false,

		///////////////////////////////////////
		// event                             //
		///////////////////////////////////////

		// onSelect : function(title, index) {
		// 	alert(title + ', ' + index);
		// },

		// onUnselect : function(title, index) {
		// 	alert(title + ', ' + index);
		// },

		// onBeforeClose : function(title, index) {
		// 	alert(title + ', ' + index);
		// }

		// onClose : function(title, index) {
		// 	alert(title + ', ' + index);
		// }

		// onContextMenu : function(e, title, index) {
		// 	alert(title + ', ' + index);
		// },

		// onAdd : function(title, index) {
		// 	alert(title + '|' + index);
		// }, 

		// onUpdate : function()
		// 需要执行update方法
		onUpdate : function(title, index) {
			alert(title + '|' + index);
		}, 

		// TODO 没有调试成功
		// onLoad : function(panel) {
		// 	alert(panel);
		// }, 

	}); //.css('display', 'none');


	///////////////////////////////////////
	// event                             //
	///////////////////////////////////////
	// console.log($('#box').tabs('options'));
	// console.log($('#box').tabs('tabs'));
	
	// $(document).click(function(){
	// 	$('#box').tabs().css('display', 'block');
	// 	$('#box').tabs('resize');
	// });
	
	// $('#box').tabs('add', {
	// 	id : 'bbb',
	// 	title : 'bbb',
	// 	content : 'this is a test',
	// 	// href : '',
	// 	cache : true,
	// 	iconCls : 'icon-add',
	// 	width : 50,
	// 	height : 50,
	// 	collapsible : true,
	// 	closable : true,  // 独有的
	// 	selected : false, // 独有的
	// });

	// $('#box').tabs('close', 1);
	
	// console.log($('#box').tabs('getTab', 1));
	
	// console.log($('#box').tabs('getTabIndex', '#tab2'));
	// console.log($('#box').tabs('getTabIndex', $('#tab2')));
	// console.log($('#box').tabs('getSelected'));

	// $('#box').tabs('select', 0);
	// $('#box').tabs('unselect', 1);

	// $('#box').tabs('hideHeader');
	// $('#box').tabs('showHeader');

	// console.log($('#box').tabs('exists', 0));
	// console.log($('#box').tabs('exists', 20));

	$(document).click(function(){
		$('#box').tabs('update', {
			tab : $('#tab2'),
			options : {
				id : 'newtab2',
				title : 'most',
			},
		});
	});

	// $('#box').tabs('disableTab', 'tab2');
	// $('#box').tabs('disableTab', 1);
	// $('#box').tabs('enableTab', 1);

	// $('#box').tabs('scrollBy', 100);

});
