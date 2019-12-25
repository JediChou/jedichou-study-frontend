<?php

//////////////////////////////////////////////////
// 第16章 - 文件和目录1
//////////////////////////////////////////////////

// show: 获取基础路径
// File_GetBasePath_Demo();
function File_GetBasePath_Demo() {
    $file = 'c:/temp/a.txt';
    echo basename($file);
}

// show: 获取路径的目录
// File_GetBaseDirectory_Demo();
function File_GetBaseDirectory_Demo() {
    $file = 'D:/temp/php_manual_zh222.chm';
    echo dirname($file);
}

// show: 获取路径文件的信息
// File_GetRelationInfo_Demo();
function File_GetRelationInfo_Demo() {
    $path = 'D:/temp/go/lab';
    print_r(pathinfo($path));
}

// show: 获取绝对路径的信息
// File_GetFactPathInfo_Demo();
function File_GetFactPathInfo_Demo() {
    $path = 'D:/temp/zen4-vs-jedi-20161024-1319-JediLost.zgf';
    print_r(realpath($path));
}

// show: 根据相对路径打印出具体路径位置
// File_GetFactPathByRelativePath_Demo();
function File_GetFactPathByRelativePath_Demo() {
    $path = '../index.php';
    print_r(realpath($path));
}

// show: 确定文件的大小
File_GetFileSize_Demo();
function File_GetFileSize_Demo() {
    $path = 'D:/temp/zen4-vs-jedi-20161024-1319-JediLost.zgf';
    print_r(filesize($path));
}

// show: 计算磁盘剩余空间
// File_GetDiskFreeSize_Demo();
function File_GetDiskFreeSize_Demo() {
    print_r(disk_free_space("c:/"));
    echo "<br/>";
}

// show: 计算磁盘总空间
// File_GetDiskTotalSize_Demo();
function File_GetDiskTotalSize_Demo() {
    print_r(disk_total_space('c:/'));
    echo "<br/>";

    // 转换成KB数
    print_r(round(disk_total_space('c:/')/1024.0, 2));
}

// show: 获得文件的最后访问时间
// File_GetLastAccessDate_Demo();
function File_GetLastAccessDate_Demo() {
    $path = '../index.php';

    // 调整时区
    date_default_timezone_set('Asia/Shanghai');

    echo date('Y-m-d, H:i:s', fileatime($path)) . '<br/>';
    echo date('Y-m-d, H:i:s');
}

// show: 获得文件的修改访问时间
// File_GetLastModifyDate_Demo();
function File_GetLastModifyDate_Demo() {
    $path = '../index.php';

    // 调整时区
    date_default_timezone_set('Asia/Shanghai');

    echo date('Y-m-d, H:i:s', filectime($path)) . '<br/>';
    echo date('Y-m-d, H:i:s');
}

// show: 获得文件的修改访问时间
// 注意和上面代码的区别
File_GetLastModifyDate2_Demo();
function File_GetLastModifyDate2_Demo() {
    $path = '../index.php';

    // 调整时区
    date_default_timezone_set('Asia/Shanghai');

    echo date('Y-m-d, H:i:s', filemtime($path)) . '<br/>';
    echo date('Y-m-d, H:i:s');
}