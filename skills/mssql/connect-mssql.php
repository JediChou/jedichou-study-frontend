<?php

// todo: 2016.8.31, 还没有设置mssql的驱动程序，所以无法调试

$serverName = "(local)";
$connectionOptions = array("Database" => "sqlhelper");
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    echo "<h1>" . "connection error:" . "</h1>";
    echo "<p>can not connect to local sql server</p>";
}
else {
    echo "<h1>" . "connection success:" . "</h1>";
    echo "<p>You can access local sql server</p>";
}
