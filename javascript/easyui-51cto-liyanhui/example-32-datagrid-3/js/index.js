// script for ch32, Data Grid 3
// Data Grid style configuration

$(function () {

    $('#box').datagrid({
        width: 500,
        title: '用户列表',
        iconCls: 'icon-search',
        url : 'user.php',
        columns: [[
		
			////////////////////////////////////
			// 本课重点，列属性
			
            {
                field: "user",
                title: "用户名",
				sortable: true,
				// align: 'center',		// 表格内容居中
				// halign: 'center',	// 仅标题居中
				// resizeable: false,	// 是否允许改变大小，默认是true
				// fixed: true,			// 阻止自适应
				// hidden: true,		// 隐藏本列
				
				// 格式化单元格
				// formatter: function(value, row, index){
				//     return '[' + value + ']';
				// },
				
				// 
				styler: function(value, row, index){
					if(row.user == '卡卡西')
						return 'background-color:gray';
				}
            },
            {
                field: "email",
                title: "电子邮件",
				sortable: true,
            },
            {
                field: "date",
                title: "注册日期",
				sortable: true,
            }
        ]],
		pagination: true,
		pageSize: 10,
		pageList: [5, 10, 15],
		pagePosition: 'bottom',
		sortName : 'date',
		sortOrder : 'DESC',
		remoteSort : false,
		multiSort: true,
		queryParams: { id:1, },
		
		////////////////////////////////
		// 本课重点, DataGrid的样式设置
		
		striped: true,  	// 斑马线效果
		nowrap: true,		// 文本cell长度过长时是否换行，默认是false
		fitColumns: true,	// 表格宽度是否自适应
		// data:[{},{}],	// 手工获取数据
		// loadMsg: "乖乖，慢慢等不着急……",	// 加载数据时的等待信息
		rownumbers: true,
		singleSelect: true,	// 只能选定一行
		// showHeader: true,	// 是否显示行头，默认是true
		// showFooter: false,	// 显示行尾，默认是false（需修改返回值，在返回值最后加上 "footer":[{}]，可用作统计（例如：小计）
		scrollbarSize: 30,	// 滚动条与表格的间距
		rowStyler: function(index, row){
			// console.log(row);
			// 这里返回的也可以是CSS的CLASS名称
			if(row.user == '卡卡西')
				return 'background-color:orange';
		},
		
		
    });

});
