$(function(){
	
	$(document).on('contextmenu', function(e){
		// 禁用浏览器的默认右键菜单
		e.preventDefault();
		
		// 在鼠标位置显示菜单
		$('#box').menu('show', {
			left : e.pageX,
			top : e.pageY,
		});
		
		// $('#box').menu('hide');
	});
	
	///////////////////////////////////////////
	// method:
	
	// console.log($('#box').menu('options'));
	// show line 8-11
	// hide line 13
	// destroy $('#box').menu('destroy');
	
	// getitem
	// console.log($('#box').menu('getItem', 'new'));
	// console.log($('#box').menu('getItem', $('#new')));
	// console.log($('#box').menu('getItem', '#new'));
	
	// setText
	// $('#box').menu('setText', {target:'#new',text:'new value'});
	
	// setIcon
	// $('#box').menu('setIcon', {target:'#new', iconCls:'icon-add'});
	
	// findItem
	// console.log($('#box').menu('findItem', 'quit'));
	
	// appendItem
	/*
	$('#box').menu('appendItem', {
		id:'new-item',
		title:'new-item',
		text:'cut',
		iconCls:'icon-cut',
		// href:'*.aspx',
		onclick : function(){
			alert('click new item');
			console.log($('#box').menu('getItem','#new-item'));
		},
	});
	*/
	
	// removeItem
	// $('#box').menu('removeItem', '#new');
	
	// disableItem, enableItem
	// $('#box').menu('disableItem', '#new');
	// $('#box').menu('enableItem', '#new');
	
	///////////////////////////////////////////
	// menu event
	
	$('#box').menu({
		//onShow : function(){
		//	alert('menu onshow event');
		//},
		
		//onHide : function(){
		//	alert('menu onshow event');
		//},
		
		// onClick 1, onClick : function(){alert('menu click');},
		// onClick 2, onClick : function(item){alert(item);},
		// onClick 3, onClick:function(item){alert(item.text);},	
	});
	
	
});
