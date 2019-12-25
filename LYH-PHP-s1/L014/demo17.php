<?php

// Show: 进行字符串数组的排序
// SortArray_First();
function SortArray_First() {
    $arr = array("sarah", "xin", "sammy", "loraine");
    sort($arr);  // 会改变原来的数组次序
    print_r($arr);
}

// Show: key-value的排序
// SortArray_Second();
function SortArray_Second() {
    $arr = array("sarah"=>20, "xin"=>28, "sammy"=>18, "loraine"=>31);
    sort($arr);
    print_r($arr);
}

// Show: 數值排序
// SortArray_Third();
function SortArray_Third() {
    $arr = array(5,4,2,1,3);
    print_r($arr);
    print_r("<br/>");
    sort($arr);
    print_r($arr);
}

// Show: 字符串排序(字符串可轉換成數字)
// SortArray_Fourth();
function SortArray_Fourth() {
    $arr = array('2','12');
    print_r($arr);
    print_r("<br/>");
    sort($arr, SORT_STRING);
    // sort($arr, SORT_NUMERIC);
    print_r($arr);
}

// Show: 英文字符串排序
// SortArray_EnglishSort();
function SortArray_EnglishSort() {
    $arr = array('sarah', 'xin', 'sammy', 'loraine');
    print_r($arr);
    print_r("<br/>");

    // 保持原有的key-value关联
    // Jedi: 这个非常有用
    asort($arr);
    print_r($arr);
}

// Show: 带有key-value的字符串数组排序
// SortArray_EnglishSort_WithKeyValue();
function SortArray_EnglishSort_WithKeyValue() {
    $arr = array(20=>'sarah', 28=>'xin', 18=>'sammy', 31=>'loraine');
    print_r($arr);
    print_r("<br/>");

    // 保持原有的key-value关联, 按value来排序
    // Jedi: 这个非常有用
    asort($arr);
    print_r($arr);
}

// Show: 带有key-value的字符串数组排序，按键名
// SortArray_EnglishSort_OrderByKey();
function  SortArray_EnglishSort_OrderByKey() {
    $arr = array('e'=>'sarah', 'd'=>'xin', 'b'=>'sammy', 'c'=>'loraine');
    print_r($arr);
    print_r("<br/>");

    // 保持原有的key-value关联, 按key排序
    ksort($arr);
    print_r($arr);
}

// Show: 将数组进行随机排序
// SortArray_Shuffle(array('a', 'b', 'c'));
function SortArray_Shuffle($arr) {
    $temp = shuffle($arr);
    print_r($temp);
}

// Show: 执行数组反向
// SortArray_Reverse(array(1,2,3));
function SortArray_Reverse($arr) {
    $temp = array_reverse($arr);
    print_r($temp);
}

// Show: 随机选择数组中的一个下标
$arr = array('jedi', 'ray', 'bin', 'bing', 'php', 'java');
print_r($arr);
echo "<br/>";
SortArray_Rand($arr);
function SortArray_Rand($arr) {
    $temp = array_rand($arr);
    print_r($temp . '->' . $arr[$temp]);
}