<?php

// demo_multiArray_KeyValue();
// demo_PrintMultiArray_KeyValue();
demo_PrintMultiArray_KeyValue_ByList();

/////////////////////////////////////////////
// Show: 显示多维数组 带键值对的数组
function demo_multiArray_KeyValue() {
    $array = array(
        array('name'=>'abby',  'age'=>16, 'weight'=>45.5),
        array('name'=>'nancy', 'age'=>17, 'weight'=>51.0),
        array('name'=>'sarah', 'age'=>22, 'weight'=>44)
    );
    print_r($array);
}

/////////////////////////////////////////////
// Show: 多维数组 带键值对的数组
function demo_PrintMultiArray_KeyValue() {
    $array = array(
        array('name'=>'abby',  'age'=>16, 'weight'=>45.5),
        array('name'=>'nancy', 'age'=>17, 'weight'=>51.0),
        array('name'=>'sarah', 'age'=>22, 'weight'=>44)
    );

    for ($col = 0; $col < 3; $col++) {
        print_r($array[$col]);
        print_r("<br/>");
    }
}

/////////////////////////////////////////////
// Show: 多维数组 带键值对的数组
function demo_PrintMultiArray_KeyValue_ByList() {
    $array = array(
        array('name'=>'abby',  'age'=>16, 'weight'=>45.5),
        array('name'=>'nancy', 'age'=>17, 'weight'=>51.0),
        array('name'=>'sarah', 'age'=>22, 'weight'=>44)
    );

    for ($col = 0; $col < 3; $col++) {
        while(list($key, $value) = each($array[$col]))
            echo $key . ":" . $value . ", ";
        echo "<br/>";
    }
}