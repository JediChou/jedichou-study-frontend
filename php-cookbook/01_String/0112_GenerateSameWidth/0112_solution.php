<?php

// 1.12 生成字段宽度固定的数据记录
// 例1-32：生成固定宽度字段的数据记录

// 创建数据源
$books = array(
    array('三国演义', '罗贯中'),
    array('红楼梦', '曹雪芹'),
    array('西游记', '吴承恩'),
    array('水浒传', '施耐庵')
);

// 格式化输出
foreach($books as $book) {
    print pack('A25A15', $book[0], $book[1]) . "<br/>\n";
}