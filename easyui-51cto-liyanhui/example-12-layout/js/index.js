$(function(){
	
		$('#box').layout({
			// fit : true,  // layout property		
		}); //.css('display', 'none');	

	///////////////////////////////////////
	// method                            //
	///////////////////////////////////////
	
	// resize
	/*
	$(document).click(function(){
		$('#box').layout().css('display', 'block');
		$('#box').layout('resize');
	});
	*/
	
	// panel
	// console.log($('#box').layout('panel', 'center'));
	
	// collapse
	// $('#box').layout('collapse', 'west');
	
	// expand
	/*
	$('#box').layout('collapse', 'west');
	$(document).click(function(){
		$('#box').layout('expand', 'west');
	});
	*/
	
	// add
	/*
	$('#box').layout('remove', 'west');
	$(document).click(function(){
		console.log('start click');
		$('#box').layout('add', {
			region:'west',
			title:'左西',
			border:true,
			split:true,
			iconCls:'icon-add',
			width:100,
		});
	});
	*/
	
	// remove
	// $('#box').layout('remove', 'west');
	
});
