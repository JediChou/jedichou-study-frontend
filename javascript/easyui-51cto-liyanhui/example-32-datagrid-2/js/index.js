// script for ch32, Data Grid 2
// Data Grid Sorted

$(function () {

    $('#box').datagrid({
        // width: '400',
        title: '用户列表',
        iconCls: 'icon-search',
        url : 'user.php',
        columns: [[
            {
                // 在这里用双引号和单引号似乎有所区别
                field: "user",
                title: "用户名",
				sortable: true,
            },
            {
                field: "email",
                title: "电子邮件",
				sortable: true,
				
				// 自定义排序不怎么用
				//sorter: function(a, b){
				//	console.log(a + '|' + b);
				//},
            },
            {
                field: "date",
                title: "注册日期",
				sortable: true,
            }
        ]],
		
		pagination: true,
		pageSize: 10,
		pageList: [5, 10, 15],  // pageList和pageSize要配合使用，否则不生效
		// pageNumber : 2,
		
		// 分页工具栏的位置
		// pagePosition: 'top',
		// pagePosition: 'both',
		pagePosition: 'bottom', // default value
		
		// 本课的重点
		sortName : 'date',
		sortOrder : 'DESC',
		remoteSort : false, // 默认为true, 会执行服务器端排序
		
		multiSort: true,
		
		// 提交表单的方式
		method : 'GET',
		
		// 在POST和GET请求时附加上额外的信息
		queryParams: { id:1, },
		
    });

});
