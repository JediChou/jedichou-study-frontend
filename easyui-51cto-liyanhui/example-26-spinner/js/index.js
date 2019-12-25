// script for ch26, spinner
// 依赖于textbox

$(function(){

	$('#box').spinner({
	
		// 属性列表
		// width : 300, 
		// height : 300,
		// value : 300,
		// min : '0',		// 在其他高级组件中会有反应
		// max : '10',		// 在其他高级组件中会有反应
		// increment: 1,	// 在其他高级组件中会有反应
		required: true,
		// editable: true,
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
			var current = parseInt($('#box').spinner('getValue'));
			var newValue;
			if(isNaN(current)) newValue = -1; else newValue = current - 1;
			$('#box').spinner('setValue', newValue);
		}, 
		
		onSpinDown : function() {
			var current = parseInt($('#box').spinner('getValue'));
			var newValue;
			if(isNaN(current)) newValue = 1; else newValue = current + 1;
			$('#box').spinner('setValue', newValue);
		},
		
		/*
		// 要和setValue配合使用
		onChange : function() {
			alert('value changed');
		},
		*/		
		
	});
	
	// 方法	
	
	// console.log($('#box').spinner('options'));
	// $('#box').spinner('destroy');
	
	// $('#box').spinner('disable');
	// $('#box').spinner('enable');
	
	// $('#box').spinner('setValue', 12);
	// console.log( $('#box').spinner('getValue') );
	
	// $('#box').spinner('readonly');
	// $('#box').spinner('readonly', true);
	// $('#box').spinner('readonly', false);
	
	// clear要配合setValue进行使用
	// $('#box').spinner('setValue', 12);
	// $('#box').spinner('clear');
	
	// reset要配合其他方法或事件一起使用
	/*
	$('#box').spinner('setValue', 12);
	$(document).click(function(){
		$('#box').spinner('reset');
	});
	*/
	
});
