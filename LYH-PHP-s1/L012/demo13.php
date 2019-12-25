<?php

demo13_1();

// Show: 移除数组中相同的值
function demo13_1() {
    $arr = array('Sara' => 18, 'Tara' => 19);
    $arr_exchange = array_flip($arr);
    print_r($arr);
    print_r("<br/>");
    print_r($arr_exchange);
}