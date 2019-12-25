<?php

// 例1-33, 不使用pack()函数生成固定宽度字段的数据记录

$books = array(
    array('C#高级编程', 'Wrox', '2009'),
    array('AngularJS高级编程', 'Wrox', '2015'),
    array('C#设计模式', 'Jedi', '2008'),
);

foreach($books as $book) {
    $title = str_pad(substr($book[0], 0, 25), 25, '.');
    $publisher = str_pad(substr($book[1], 0, 15), 15, '.');
    $year = str_pad(substr($book[2], 0, 4), 4, '.');
    print "$title$publisher$year<br/>\n";
}