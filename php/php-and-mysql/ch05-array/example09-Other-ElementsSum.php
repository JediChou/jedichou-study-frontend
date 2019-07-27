<?php

/**
 * 对数组里的数组进行求和，并忽略非数字类型。
 * @abstract
 * @author Jedi Zhou <skyzhx@163.com>
 * @copyright (c) 2014-4-3, Jedi Zhou
 */
header("Content-type:text/html; charset=utf-8");

$Array_Numbers = range(1, 100);
$Array_Upcase = range('A', 'Z');
$Array_Lowcase = range('a', 'z');
$Array_Container = array($Array_Numbers, $Array_Lowcase, $Array_Upcase);

foreach($Array_Container as $array) {
    echo array_sum($array) . "<br/>";
}
