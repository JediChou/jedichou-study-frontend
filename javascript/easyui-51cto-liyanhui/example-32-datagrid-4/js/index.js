// script for ch32, Data Grid 4
// 数据表格组件

$(function () {

	//////////////////////////////
	// 学习重点
	obj = {
		search : function(){
			$('#box').datagrid('load', {
				user : $.trim($('input[name="user"]').val()),
			});
		},
	};
	

    $('#box').datagrid({
        width: 600,
        title: '用户列表',
        iconCls: 'icon-search',
        url : 'user.php',
        columns: [[
            {
                field: "user",
                title: "用户名",
				sortable: true,
				
				/////////////////////////////////////////////////////////////
				// 重点：若每个columns的width设置为100，则会自动填充空白区域
				// 注意：必须配合fitColumns使用，该值需为true
				// width: 100,
				/////////////////////////////////////////////////////////////
            },
            {
                field: "email",
                title: "电子邮件",
				sortable: true,
				// width: 100,
            },
            {
                field: "date",
                title: "注册日期",
				sortable: true,
				// width: 100,
            }
        ]],
		pagination: true,
		pageSize: 10,
		pageList: [5, 10, 15],
		pagePosition: 'bottom',
		sortName : 'date',
		sortOrder : 'DESC',
		queryParams: { id:1, tt:'jedi' },		
		fitColumns: true,
		rownumbers: true,
		method: 'POST',
		
		/////////////////////////////////////////////////////////////
		// 重点：为DataGrid增加Toolbar
		/////////////////////////////////////////////////////////////
		toolbar: '#tb',
    });

});
