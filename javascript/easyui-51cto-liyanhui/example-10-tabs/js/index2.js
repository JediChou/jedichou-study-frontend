$(function(){

	$('#box').tabs({

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

		onSelect : function(title, index) {
			alert(title + ', ' + index);
		}

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
	});
});
