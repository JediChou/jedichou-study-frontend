<?php

// 例子 1-28: 生成逗号分隔的数据

// 定义数据源
$sales = array(
    array('Jedi', '2016-3-1', '2016-4-1', 12.3),
    array('Jedi', '2016-4-1', '2016-5-1', 12.4),
    array('Jedi', '2016-5-1', '2016-6-1', 12.5),
    array('Jedi', '2016-6-1', '2016-7-1', 12.6)
);

// 打开csv文件句柄
$fh = fopen('php://output', 'w');

// 顺序写
foreach($sales as $sales_line) {
    if (fputcsv($fh, $sales_line) === false) {
        die("Can't write csv line");
    }
}

// 关闭句柄
fclose($fh) or die("Can't close content.csv");