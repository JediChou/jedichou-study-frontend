// script for ch32, Data Grid 1

$(function () {

    $('#box').datagrid({
        // width: '400',
        title: '用户列表',
        iconCls: 'icon-search',
        url : 'user.php',
        columns: [[
            {
                // 在这里用双引号和单引号似乎有所区别
                field: "username",
                title: "用户名"
            },
            {
                field: "email",
                title: "电子邮件"
            },
            {
                field: "date",
                title: "注册日期"
            }
        ]],
		pagination: true,
		pageSize: 5,
		pageList: [5, 10, 15],
		// pageNumber : 2,
		// pagePosition: 'top',
		// pagePosition: 'both',
		pagePosition: 'bottom', // default value
		
    });

});
