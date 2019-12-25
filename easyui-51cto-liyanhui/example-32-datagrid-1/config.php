<?php
	header('Content-Type:text/html; charset=utf-8');
	
	define('DB_HOST', 'localhost');
	define('DB_USER', 'root');
	define('DB_PWD',  'samsung1s');
	define('DB_NAME', 'test');
	
	$conn = @mysql_connect(DB_HOST, DB_USER, DB_PWD) or die('connected failed');
	@mysql_select_db(DB_NAME) or die('database error: '.mysql_error());
	@mysql_query('SET NAMES UTF8') or die('charset error'.mysql_error());
	
?>