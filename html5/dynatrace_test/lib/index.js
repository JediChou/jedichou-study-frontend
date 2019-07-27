$(function() {
	// 获取测试用例列表
	var all = getAllTest();
	
	// 将测试用例的信息放到页面上
	all.forEach(function(elt){
		var tr = "\
			<tr>\
				<td>Link:</td>\
				<td><a href='{0}'>{0}</a></td>\
				<td>{1}</td>\
			</tr>\
		";
		tr = String.format(tr, elt.url, elt.desc);
		$('#TestList').append(tr);
	});
});