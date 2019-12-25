// script for ch27, numberspinner
// 依赖于textbox

$(function(){

	$('#box').numberspinner({
	
		// 属性列表
		// width : 300, 
		// height : 300,
		value : 300,
		min : 0,		// 这里传递int
		max : 500,		// 这里传递int
		increment: 20,	// 递增或递减的数字
		required: true,
		// editable: false,
		// disabled: true,
		// readonly: true,
		
		/* // 这里可以设置value的增量
		spin : function(down) {
			// 向上为false, 向下为true
			// alert(down);
			if(down)
				$('#box').value += 1;
			else
				$('#box').value += -1;
		}
		*/
		
		// 事件
		/*
		onSpinUp : function() {
			alert('点击向上触发');
		}, 
		
		onSpinDown : function() {
			alert('点击向下触发');
		},
		
		// 要和setValue配合使用
		onChange : function() {
			alert('value changed');
		},
		*/		
		
	});
	
	// 方法	
	// Jedi: 以下的方法要做点测试！
	
	// console.log($('#box').numberspinner('options'));
	// $('#box').numberspinner('destroy');
	
	// $('#box').numberspinner('disable');
	// $('#box').numberspinner('enable');
	
	// $('#box').numberspinner('setValue', 12);
	// console.log( $('#box').numberspinner('getValue') );
	
	// $('#box').numberspinner('readonly');
	// $('#box').numberspinner('readonly', true);
	// $('#box').numberspinner('readonly', false);
	
	// clear要配合setValue进行使用
	// $('#box').numberspinner('setValue', 12);
	// $('#box').numberspinner('clear');
	
	// reset要配合其他方法或事件一起使用
	/*
	$('#box').numberspinner('setValue', 12);
	$(document).click(function(){
		$('#box').numberspinner('reset');
	});
	*/
	
});
