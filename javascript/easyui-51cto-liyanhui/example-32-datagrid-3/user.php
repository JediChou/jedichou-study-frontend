<?php
	
	// sleep(3);
	require 'config.php';
	
	// Create some variables for query
	// FOR POST METHOD
	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);
	
	$order = $_POST['order'];
	$sort = $_POST['sort'];
	
	// Define result variable and sql query object.
	$query = mysql_query("SELECT user, email, date from user ORDER BY $sort $order LIMIT $first, $pageSize") or die("query failed");
	$json = '';
	
	// Iterate sql result and save row to result variable.
	while(!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$json .= json_encode($row) . ',';
	}
	
	// Calculate total number.
	$total = mysql_num_rows(mysql_query("SELECT user, email, date from user"));
	
	// Format result and return it.
	$json = substr($json, 0, -1);	
	echo '{"total":'. $total .', "rows":' . "[" . $json . "]}";
		
	mysql_close();
	
?>