<?php
	
	// sleep(1);
	require 'config.php';
	
	/*// FOR POST METHOD
	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);
	
	// for ch33 the datagrid order
	$order = $_POST['order'];
	$sort = $_POST['sort'];
	*/
	
	// FOR GET METHOD
	$page = $_GET['page'];
	$pageSize = $_GET['rows'];
	$first = $pageSize * ($page - 1);
	
	// for ch33 the datagrid order
	$order = $_GET['order'];
	$sort = $_GET['sort'];
	
	$query = mysql_query("SELECT user, email, date from user ORDER BY $sort $order LIMIT $first, $pageSize") or die("query failed");
	$json = '';
	
	while(!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$json .= json_encode($row) . ',';
	}
	
	$total = mysql_num_rows(mysql_query("SELECT user, email, date from user"));
	
	$json = substr($json, 0, -1);	
	echo '{"total":'. $total .', "rows":' . "[" . $json . "]}";
		
	mysql_close();
	
?>