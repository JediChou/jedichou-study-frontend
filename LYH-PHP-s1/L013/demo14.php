<?php

// demo_multiArray();
// demo_printMultiArray();
demo_printMultiArray_second();

/////////////////////////////////////////////
// Show: 显示多维数组
function demo_multiArray() {
    $array = array(
        array('abby', 16, 45.5),
        array('nancy', 17, 51.0),
        array('sarah', 22, 44)
    );
    print_r($array);
}

/////////////////////////////////////////////
// Show: 循环打印 - 1
function demo_printMultiArray_first() {

    $array = array(
        array('abby', 16, 45.5),
        array('nancy', 17, 51.0),
        array('sarah', 22, 44)
    );

    for ($col = 0; $col < 3; $col++) {
        print_r($array[$col]);
        print_r("<br/>");
    }
}

/////////////////////////////////////////////
// Show: 循环打印 - 2
function demo_printMultiArray_second() {

    $array = array(
        array('abby', 16, 45.5),
        array('nancy', 17, 51.0),
        array('sarah', 22, 44)
    );

    for ($col = 0; $col < 3; $col++) {
        for ($row = 0; $row < 3; $row++)
            echo $array[$col][$row] . " ";
        echo "<br/>";
    }
}
