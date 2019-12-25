<?php

demo12_2();

// Show: 移除数组中相同的值
function demo12_1() {
    $arr = array('1', '1', '2', '2', '3', '3');
    $arr = array_unique($arr);
    print_r($arr);
}

// Show: 移除数组中相同的值, 键值对
function demo12_2() {
    $arr = array(
        'Sara' => 18,
        'Sarah' => 18
    );
    $arr_unique = array_unique($arr);
    print_r($arr);
    print_r("<br/>");
    print_r($arr_unique);
}

