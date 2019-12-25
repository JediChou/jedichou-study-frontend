$(function(){
	
	// 属性列表
	$("#box").pagination({
		// total
		// pageSize:
		// pageNumber
		// pageList
		// loading : true
		// buttons : [	{iconCls:},'-',{}],
		// layout : ['first','last','prev',],
		
		// showPageList: false,
		// showRefresh:
		// beforePageText:
		// afterPageText:
		// displayMsg: '从{from}到{to}，有{}人		
		// onSelectpage : function(pageNumber, pageSize){},
		// onBeforeRefresh:function(pageNumber, pageSize){},
		// onRefresh:function(pageNumber, pageSize){},
		// onChangePageSize:function(pageSize)(),
		
	});
	
	// 方法
	// $('#box').pagination('options')
	// $('#box').pagination('loaded')
	// $('#box').pagination('options')
	// $('#box').pagination('refresh')
	
	$(document).click(function(){
		$('#box').pagination('refresh', {
			pageSize : 2,
			pageNumber : 2,
		});
		
		$('#box').pagination('select', 2);
	});
	
});
