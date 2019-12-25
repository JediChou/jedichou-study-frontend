<?php

// 1.11 解析逗号分隔的数据
// 例1-31. 从文件中读取CSV数据


// 打开文件句柄
$fp = fopen('sample2.csv', 'r') or die("找不到文件");

// 打印表格，并逐行读取句柄中的数据，然后填充到表格中去
print "<table>\n";
while ($csv_line = fgetcsv($fp)) {
    print '<tr>';
    for ($i=0, $j=count($csv_line); $i < $j; $i++) {
        print '<td>' . htmlentities($csv_line[$i]) . '</td>';
    }
    print '</tr>';
}
print '</table>';

// 关闭文件句柄
fclose($fp) or die('文件句柄无法关闭');