$(function(){

	$('#box').panel({

		//property
		// id : 'pox',
		title : 'panel title',
		width: 500,
		height: 150,
		iconCls : 'icon-add',
		// left : 100,
		// top : 100,
		cls : 'a',
		headerCls : 'b',
		bodyCls : 'c',
		style : {
			// 'background' : 'red',
			'min-height' : '500px',
		},
		// fit : true,
		// border  : false,
		// doSize : false,
		// noheader : true,
		// content : "abcdefg",
		collapsible : true,
		minimizable : true,
		maximizable : true,
		closable : true,
		// tools : '#tt',  // the 1st method
		tools : [
//			{
//				iconCls : 'icon-help',
//				handler : function() {alert('help!');}
//			},

//			{
//				iconCls : 'icon-add',
//				handler : function() {alert('add!');}
//			},

		    {
		        iconCls : 'icon-reload',
                handler : function() {$('#box').panel('refresh');}
		    },
		],
		// collapsed : true,
		// minimized : true,
		// maximized : true,
		// closed : true,
		href : 'echo.aspx',
		// cache 没做演示
		loadingMessage : '加载中...',
        extractor : function(data) {
			// alert(data);
//			return data.substring(0, 3);
            return data;
        },

//        onBeforeLoad : function(data) {
//            alert('远程加载之前触发');
//            return false;  // 取消远程加载
//        },

//        onLoad : function(data) {
//            alert('远程加载之后触发');
//        },

//        onBeforeOpen : function(data) {
//            alert('打开之前触发');
//            return false; // 取消打开
//        },

//        onOpen : function(data) {
//            alert('打开之后触发');
//        },

//        onBeforeClose : function(data) {
//            alert('关闭之前触发');
//        },

//        onClose : function(data) {
//            alert('关闭之后触发');
//        },

//        onBeforeDestroy : function(data) {
//            alert('销毁之前触发');
//            // return false; // 取消销毁
//        },

//        onDestroy : function(data) {
//            alert('销毁之后触发');
//        },

//        onBeforeCollapse : function(data) {
//            alert('折叠之前触发');
//            // return false;
//        },

//        onCollapse : function(data) {
//            alert('折叠之后触发');
//        },

//        onBeforeExpand : function(data) {
//            alert('展开之前触发');
//            // return false; // 取消展开
//        },

//        onExpand : function(data) {
//            alert('展开之后触发');
//        },
        
//        onMaximize : function(data) {
//            alert('窗口最大化时触发');
//        },

//        onRestore : function(data) {
//            alert('窗口还原时触发');
//        },

//        onMinimize : function(data) {
//            alert('窗口最小化时触发');
//        },

//        onResize : function() {
//            alert('面板改变大小时触发');
//        },

//        onResize : function(width, height) {
//            alert(width + ', ' + height);
//        },

//        onMove : function(left, top) {
//            alert(left + ', ' + top);
//        },
	});

//	  $('#box').panel('panel').css('position', 'absolute');
//    $('#box').panel('destroy');
//    $('#box').panel('width', 300);
//    $('#box').panel('height', 600);
//    $(document).click(function() {
//        $('#box').panel('resize', {
//            'width' : 600,
//            'height' : 300,
//        });
//    });

//    $(document).click(function() {
//        $('#box').panel('resize', {
//            'left' : 600,
//            'top' : 300,
//        });
//    });

//    console.log($('#box').panel('options'));
//    console.log($('#box').panel('panel'));
//    console.log($('#box').panel('header'));
//    console.log($('#box').panel('body'));
//    console.log($('#box').panel());
//    $('#box').panel('setTitle', 'test panel');
//    $('#box').panel('close', true);
//    $('#box').panel('open', true);
//    $('#box').panel('destroy');
//    $('#box').panel('maximize');
//    $('#box').panel('minimize');
//    $('#box').panel('restore');
//    $('#box').panel('collapse');
//    $('#box').panel('expand');
    

});
